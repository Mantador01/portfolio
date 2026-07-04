#include <vector>
// #include <array>
#include <map>
// #include <set>
#include <algorithm>
#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
// #include <cctype>
// #include <cassert>
#include <cmath>
#include <cstdio>




// =================== TP1 ===================

struct Sommet {
    double x=0.0, y=0.0, z=0.0;

    Sommet() = default;
    Sommet(double X,double Y,double Z) : x(X), y(Y), z(Z) {}
};

// ========= DES OPERATEURS ========== 
static inline Sommet operator+(const Sommet& a, const Sommet& b)
{
    return Sommet(a.x+b.x, a.y+b.y, a.z+b.z); 
}

static inline Sommet operator-(const Sommet& a, const Sommet& b)
{
    return Sommet(a.x-b.x, a.y-b.y, a.z-b.z);
}

static inline Sommet operator*(const Sommet& a, double s)
{
    return Sommet(a.x*s, a.y*s, a.z*s);
}

static inline Sommet operator/(const Sommet& a, double s)
{
    return Sommet(a.x/s, a.y/s, a.z/s);
}

static inline double dot(const Sommet& a, const Sommet& b)
{
    return a.x*b.x + a.y*b.y + a.z*b.z;
}

static inline Sommet cross(const Sommet& a, const Sommet& b){
    return Sommet(a.y*b.z - a.z*b.y, a.z*b.x - a.x*b.z, a.x*b.y - a.y*b.x);
}

static inline double norm(const Sommet& a)
{
    return std::sqrt(dot(a,a));
}

struct Triangle {
    int s[3] = {-1,-1,-1};  
    int tv[3]= {-1,-1,-1};   // triangle voisin opposé

    Triangle() = default;
    Triangle(int a,int b,int c)
    { 
        s[0]=a;
        s[1]=b; 
        s[2]=c; 
    }
};

struct Mesh {
    std::vector<Sommet>   TS;     // sommets
    std::vector<Triangle> TT;     // triangles
    std::vector<int>      VtoT;   // un triangle incident par sommet

    // on ajoute un sommet
    int addVertex(const Sommet& P){
        TS.push_back(P);
        VtoT.push_back(-1);
        return (int)TS.size()-1;
    }

    // on ajoute un triangle
    int addTriangle(int a,int b,int c){
        if(a<0||a>=(int)TS.size()||b<0||b>=(int)TS.size()||c<0||c>=(int)TS.size())
            throw std::runtime_error("addTriangle: index de sommet hors bornes");
        TT.emplace_back(a,b,c);
        int ti=(int)TT.size()-1;
        if(VtoT[a]==-1) VtoT[a]=ti;
        if(VtoT[b]==-1) VtoT[b]=ti;
        if(VtoT[c]==-1) VtoT[c]=ti;
        return ti;
    }

    // on va coudre les triangles (regarder note tablette CM1-2 et détails doc dans notes)
    void coudre(){
        std::map<std::pair<int,int>, std::pair<int,int>> edge2tri; // c'est une map d'arêtes à triangles
        for(auto& tr: TT) tr.tv[0]=tr.tv[1]=tr.tv[2]=-1; // triangle voisin opposé à s[i] (-1 si bord)

        for(int t=0;t<(int)TT.size();++t){ // pour chaque triangle

            for(int i=0;i<3;++i){ // pour chaque sommet

                int a = TT[t].s[(i+1)%3]; // sommet opposé
                int b = TT[t].s[(i+2)%3];

                auto key = std::minmax(a,b);
                auto it  = edge2tri.find(key); // on cherche l'arête

                if(it==edge2tri.end()){
                    edge2tri[key] = {t,i};        // stocke face t et index local i (sommet opposé)
                }else{
                    int u  = it->second.first;
                    int iu = it->second.second;
                    TT[t].tv[i]  = u;             // voisin détecté
                    TT[u].tv[iu] = t;
                }
            }
        }
    }



    // Pour sauvegarder OFF (regarder note pour OFF)
    bool saveOFF(const std::string& path) const {
        std::ofstream out(path);
        if(!out) return false;
        out << "OFF\n";
        out << TS.size() << " " << TT.size() << " 0\n";
        for(const auto& v: TS) out << v.x << " " << v.y << " " << v.z << "\n";
        for(const auto& f: TT) out << "3 " << f.s[0] << " " << f.s[1] << " " << f.s[2] << "\n";
        return true;
    }

    // JUSTE DES LOG POUR DEBUG
    // void report() const {
    //     int boundaryT = 0;
    //     for(const auto& tr: TT){
    //         if(tr.tv[0]<0 || tr.tv[1]<0 || tr.tv[2]<0) ++boundaryT;
    //     }
    //     std::set<std::pair<int,int>> edges;
    //     for(const auto& tr: TT){
    //         for(int i=0;i<3;++i){
    //             int a = tr.s[i];
    //             int b = tr.s[(i+1)%3];
    //             edges.insert(std::minmax(a,b));
    //         }
    //     }
    //     std::cout << "Mesh: |V|=" << TS.size()
    //               << " |F|=" << TT.size()
    //               << " |E|=" << edges.size()
    //               << "  boundaryTriangles=" << boundaryT << "\n";
    // }

    // TP2-3

    // Aire du triangle (a,b,c)
    double AireTriangle(int a,int b,int c) const {
        Sommet u = TS[b] - TS[a];
        Sommet v = TS[c] - TS[a];
        return 0.5 * norm(cross(u,v));
    }

    // Cotangente de l'angle AU SOMMET k dans (i,j,k)
    double cot(int i,int j,int k) const {
        Sommet u = TS[i] - TS[k];
        Sommet v = TS[j] - TS[k];
        double denom = norm(cross(u,v));
        return (denom>0.0)? dot(u,v)/denom : 0.0;
    }

    // Aire par sommet
    std::vector<double> AireSommet() const {
        std::vector<double> A(TS.size(), 0.0);
        for(const auto& tr : TT){
            double aire = AireTriangle(tr.s[0], tr.s[1], tr.s[2]);
            A[tr.s[0]] += aire/3.0;
            A[tr.s[1]] += aire/3.0;
            A[tr.s[2]] += aire/3.0;
        }
        return A;
    }

    // TODO
    // Liste d’adjacence cotangente : i -> [(j, w_ij)], en traitant chaque arête une seule fois via tv (VOIR NOTE !!!!!!!!!)
    std::vector<std::vector<std::pair<int,double>>> calculerAdjacenceCotangente() const {

        int n = (int)TS.size();

        std::vector<std::vector<std::pair<int,double>>> adj(n);

        // fonction pour ajouter poids w à l’arête a->b
        auto add_w = [&](int a,int b,double w){
            auto& L = adj[a];
            for(auto& p : L) if(p.first==b){ p.second += w; return; }
            L.push_back({b,w});
        };

        for(int t=0; t<(int)TT.size(); ++t){
            const auto& tr = TT[t];
            for(int e=0; e<3; ++e){
                int i = tr.s[(e+1)%3];
                int j = tr.s[(e+2)%3];
                int k = tr.s[e];                // sommet opposé dans t
                int tn = tr.tv[e];              // triangle voisin

                // traiter l'arête (i,j) une seule fois
                if(tn >= 0 && !(t < tn)) continue;

                double alpha = cot(i,j,k);
                double beta  = 0.0;

                if(tn >= 0){
                    const auto& trn = TT[tn];
                    int l = -1;
                    for(int q=0;q<3;++q){
                        int v = trn.s[q];
                        if(v!=i && v!=j){ l = v; break; }
                    }
                    beta = cot(i,j,l);
                }
                double w = 0.5 * (alpha + beta);

                add_w(i,j,w);
                add_w(j,i,w);
            }
        }
        return adj;
    }

    // TODO (note) https://en.wikipedia.org/wiki/Laplacian
    // Laplacien d'un scalaire 
    std::vector<double> laplacienScalaire(const std::vector<double>& u, const std::vector<std::vector<std::pair<int,double>>>& adj, const std::vector<double>& Ai) const {

        int n = (int)TS.size();

        std::vector<double> Lu(n, 0.0);
        
        for(int i=0;i<n;++i){
            double num = 0.0;
            for(auto [j,wij] : adj[i]) num += wij * (u[j] - u[i]);
            double denom = 2.0 * Ai[i];
            Lu[i] = (denom>0.0)? num / denom : 0.0;
        }
        return Lu;
    }

    // --- pas de temps explicite "sûr" 
    double pasDeTemps(const std::vector<std::vector<std::pair<int,double>>>& adj, const std::vector<double>& Ai) const {

        double dt = 1e9;
        
        for(size_t i=0;i<TS.size();++i){
            double sumw = 0.0;
            for(auto [j,wij] : adj[i]) sumw += std::max(0.0, wij);
            if(Ai[i] > 0.0 && sumw > 0.0)
                dt = std::min(dt, 0.25 * (Ai[i] / sumw)); // marge
        }

        if(dt==1e9) dt = 1e-3;
        return dt;
    }

    // TODO (bug faire log) FIXED
    // un pas de diffusion explicite avec Dirichlet (note)
    void pasDeDiffChaleur(std::vector<double>& u, double dt, const std::vector<int>& fixed_ids, const std::vector<double>& fixed_vals, const std::vector<std::vector<std::pair<int,double>>>& adj, const std::vector<double>& Ai) const
    {
        auto Lu = laplacienScalaire(u, adj, Ai);
        for(size_t i=0;i<u.size();++i) u[i] += dt * Lu[i];

        // Dirichlet
        for(size_t k=0;k<fixed_ids.size();++k){
            int i = fixed_ids[k];
            if(0 <= i && i < (int)u.size())
                u[i] = fixed_vals[k];
        }
    }

    // Courbure moyenne et normale
    void courbureEtNormales(std::vector<double>& H, std::vector<Sommet>& N, const std::vector<std::vector<std::pair<int,double>>>& adj, const std::vector<double>& Ai) const
    {
        const int n = (int)TS.size();
        H.assign(n, 0.0);
        N.assign(n, Sommet{0,0,1});

        std::vector<double> X(n), Y(n), Z(n);
        for(int i=0;i<n;++i){ X[i]=TS[i].x; Y[i]=TS[i].y; Z[i]=TS[i].z; }

        auto Dx = laplacienScalaire(X, adj, Ai);
        auto Dy = laplacienScalaire(Y, adj, Ai);
        auto Dz = laplacienScalaire(Z, adj, Ai);

        for(int i=0;i<n;++i){
            Sommet D{Dx[i], Dy[i], Dz[i]};
            double len = norm(D);
            H[i] = 0.5 * len;
            N[i] = (len>1e-12)? Sommet{-D.x/len, -D.y/len, -D.z/len} : Sommet{0,0,1};
        }
    }


    // Normales sommet de référence : somme des normales de faces (pondérées par aire), puis normalisation
    std::vector<Sommet> normalesSommets() const {
        std::vector<Sommet> Nref(TS.size(), Sommet{0,0,0});
        for (const auto& tr : TT) {
            const Sommet& a = TS[tr.s[0]];
            const Sommet& b = TS[tr.s[1]];
            const Sommet& c = TS[tr.s[2]];
            Sommet nT = cross(b - a, c - a); // = 2*aire * n_face
            Nref[tr.s[0]] = Nref[tr.s[0]] + nT;
            Nref[tr.s[1]] = Nref[tr.s[1]] + nT;
            Nref[tr.s[2]] = Nref[tr.s[2]] + nT;
        }

        for (auto& n : Nref) {
            double l = norm(n);
            if (l > 1e-12) n = n / l; else n = Sommet{0,0,1};
        }

        return Nref;
    }

    // Courbure moyenne SIGNÉE (note tp)
    void courbureSignee(std::vector<double>& Hs,
                            const std::vector<std::vector<std::pair<int,double>>>& adj,
                            const std::vector<double>& Ai) const
    {
        const int n = (int)TS.size();
        Hs.assign(n, 0.0);

        // champs coordonnées
        std::vector<double> X(n), Y(n), Z(n);
        for (int i=0;i<n;++i){ X[i]=TS[i].x; Y[i]=TS[i].y; Z[i]=TS[i].z; }

        // Laplaciens des coordonnées
        auto Dx = laplacienScalaire(X, adj, Ai);
        auto Dy = laplacienScalaire(Y, adj, Ai);
        auto Dz = laplacienScalaire(Z, adj, Ai);

        // normales de référence 
        auto Nref = normalesSommets();

        // projection signée
        for (int i=0;i<n;++i){
            double proj = Dx[i]*Nref[i].x + Dy[i]*Nref[i].y + Dz[i]*Nref[i].z; // D · n_ref
            Hs[i] = -0.5 * proj; // signe convexe/concave
        }
    }

};

struct RGB { unsigned char r,g,b,a; };

// Pour la diffusion
RGB blueRed(double t01) {            // t01 in [0,1]
    t01 = std::min(1.0, std::max(0.0, t01));
    double r = t01;
    double g = 0.0;
    double b = 1.0 - t01;
    return RGB{(unsigned char)std::round(r*255),
               (unsigned char)std::round(g*255),
               (unsigned char)std::round(b*255),
               255};
}

// Palette divergente pour valeurs signées s ∈ [-1,1] : bleu (−), blanc (0), rouge (+)
RGB bwr(double s){
    s = std::max(-1.0, std::min(1.0, s));
    double r = (s > 0) ? 1.0            : (1.0 + s); // [-1,0]->[0,1], [0,1]->1
    double b = (s < 0) ? 1.0            : (1.0 - s);
    double g = 1.0 - std::abs(s);                    // blanc au centre
    return RGB{
        (unsigned char)std::round(r*255.0),
        (unsigned char)std::round(g*255.0),
        (unsigned char)std::round(b*255.0),
        255
    };
}

static inline RGB hsv2rgb(double h, double s, double v)
{
    double H = (h - std::floor(h)) * 6.0; // cycle
    double c = v * s;
    double x = c * (1 - std::fabs(std::fmod(H,2.0) - 1));
    double m = v - c;
    double r=0,g=0,b=0;
    int Hi = (int)std::floor(H);
    switch(Hi){
        case 0: r=c; g=x; b=0; break;
        case 1: r=x; g=c; b=0; break;
        case 2: r=0; g=c; b=x; break;
        case 3: r=0; g=x; b=c; break;
        case 4: r=x; g=0; b=c; break;
        default:r=c; g=0; b=x; break;
    }
    RGB out;
    out.r = (unsigned char)std::round((r+m)*255.0);
    out.g = (unsigned char)std::round((g+m)*255.0);
    out.b = (unsigned char)std::round((b+m)*255.0);
    out.a = 255;
    return out;
}

// Palette HSV : mappe s ∈ [-1,1] vers [0,1] puis HSV
RGB hsvPalette(double s){
    // normalise s de [-1,1] à [0,1]
    double h = (s + 1.0) * 0.5; 
    return hsv2rgb(h, 1.0, 1.0);
}

RGB rainbow(double t){
    t = (t < 0.0) ? 0.0 : ((t > 1.0) ? 1.0 : t);
    double r=0,g=0,b=0;

    if(t < 0.33){          // bleu -> vert
        double u = t / 0.33;
        r = 0; g = u; b = 1-u;
    }
    else if(t < 0.66){     // vert -> jaune
        double u = (t-0.33)/0.33;
        r = u; g = 1; b = 0;
    }
    else{                  // jaune -> rouge
        double u = (t-0.66)/0.34;
        r = 1; g = 1-u; b = 0;
    }

    return RGB{
        (unsigned char)std::round(r*255),
        (unsigned char)std::round(g*255),
        (unsigned char)std::round(b*255),
        255
    };
}

// Sauvegarder en COFF
bool saveCOFF(const std::string& path,
              const Mesh& M,
              const std::vector<RGB>& colors)
{
    std::ofstream out(path);
    if(!out) return false;
    out << "COFF\n";
    out << M.TS.size() << " " << M.TT.size() << " 0\n";
    for(size_t i=0;i<M.TS.size();++i){
        const auto& v = M.TS[i];
        const auto& c = colors[i];
        out << v.x << " " << v.y << " " << v.z << " "
            << (int)c.r << " " << (int)c.g << " " << (int)c.b << " " << (int)c.a << "\n";
    }
    for(const auto& f: M.TT)
        out << "3 " << f.s[0] << " " << f.s[1] << " " << f.s[2] << "\n";
    return true;
}

// Je fais pas de gestion d'erreur dans cette version (on par du principe que le fichier est bon)
bool loadOFF(const std::string& path, Mesh& M)
{
    std::ifstream in(path);
    if(!in) return false;

    std::string header;
    in >> header;
    if(header != "OFF" && header != "COFF") return false;

    int nV=0, nF=0, nE=0;
    in >> nV >> nF >> nE;

    M.TS.clear(); M.VtoT.clear(); M.TT.clear();
    M.TS.reserve(nV);
    M.VtoT.reserve(nV);
    M.TT.reserve(nF);

    // Sommets
    for(int i=0; i<nV; ++i){
        double x, y, z;
        in >> x >> y >> z;
        M.addVertex({x,y,z});
    }

    // Faces (k a b c)
    for(int f=0; f<nF; ++f){
        int k, a, b, c;
        in >> k >> a >> b >> c;   
        M.addTriangle(a,b,c);
    }

    M.coudre();
    return true;
}


int main(int argc, char** argv){
    if(argc<2){
        std::cerr << "Rajoute le fichier off !\n";
        std::cerr << "Usage: " << argv[0] << " <mesh.off>\n";
        std::cerr << "Ex:    " << argv[0] << " queen.off\n";
        return 1;
    }
    std::string path = argv[1];

    Mesh M;
    std::string err;

    if(!loadOFF(path, M)){
        std::cerr << "Echec lecture OFF: " << err << "\n";
        return 2;
    }

    // POUR LOG DEBUG
    // M.report();

    auto Ai  = M.AireSommet();
    auto adj = M.calculerAdjacenceCotangente();

    // ---- Test 1 : Δu pour u = z (sur patch plan, ~0 loin du bord)
    std::vector<double> u(M.TS.size(), 0.0);
    for(size_t i=0;i<M.TS.size();++i) u[i] = M.TS[i].z;

    auto Lu = M.laplacienScalaire(u, adj, Ai);
    std::cout << "Quelques (Δz)_i:\n";
    for(size_t i=0;i<std::min<size_t>(10,Lu.size()); ++i)
        std::cout << "  i="<<i<<"  Δz="<<Lu[i]<<"\n";

    // ---- Test 2 : D = (Δx, Δy, Δz) -> H et n
    std::vector<double> X(M.TS.size()), Y(M.TS.size()), Z(M.TS.size());
    for(size_t i=0;i<M.TS.size();++i){ X[i]=M.TS[i].x; Y[i]=M.TS[i].y; Z[i]=M.TS[i].z; }

    auto Dx = M.laplacienScalaire(X, adj, Ai);
    auto Dy = M.laplacienScalaire(Y, adj, Ai);
    auto Dz = M.laplacienScalaire(Z, adj, Ai);

    std::cout << "\nQuelques (H, n) estimés:\n";
    for(size_t i=0;i<std::min<size_t>(5, M.TS.size()); ++i){
        Sommet D{Dx[i], Dy[i], Dz[i]};
        double len = norm(D);
        double H = 0.5 * len;
        Sommet n = (len>1e-12)? (Sommet{-D.x/len, -D.y/len, -D.z/len}) : Sommet{0,0,1};
        std::cout << "  i="<<i<<"  H="<<H<<"  n=("<<n.x<<","<<n.y<<","<<n.z<<")\n";
    }

    // -------- Diffusion de chaleur --------
    std::vector<double> T(M.TS.size(), 0.0);
    int src = 0;                   // sommet source
    double Tsrc = 1.0;
    T[src] = Tsrc;

    // ATTENTION j'ai un peu bidouiller ici (8.0 * pasDeTemps) IL FAUT CHANGER SI JAMAIS ON REEXECUTE aussi modif steps_per_frame (plus petit) (j'ai modifier pour faire des capture d'écran pour le rapport)
    double dt = 8.0 * M.pasDeTemps(adj, Ai);
    int steps_per_frame = 100000;      // nb d'itérations entre deux frames
    int n_frames = 30;             // nb d'images

    for(int f=0; f<n_frames; ++f){
        for(int k=0; k<steps_per_frame; ++k){
            // Dirichlet 
            std::vector<int> fixed_ids   = { src };
            std::vector<double> fixed_val= { Tsrc };
            M.pasDeDiffChaleur(T, dt, fixed_ids, fixed_val, adj, Ai);
        }

        // Couleurs pour cette frame (0 -> bleu, 1 -> rouge)
        std::vector<RGB> cols(T.size());
        for(size_t i=0;i<T.size(); ++i) cols[i] = blueRed(T[i]); 

        // Nom de fichier avec padding
        char name[64];
        std::snprintf(name, sizeof(name), "heat_%04d.off", f);
        saveCOFF(name, M, cols);
        std::cout << "Écrit: " << name << " (COFF)\n";

    }

    // -------- COURBURE NON SIGNEE --------
    std::vector<double> H;
    std::vector<Sommet> N;
    M.courbureEtNormales(H, N, adj, Ai);

    double Hmin = *std::min_element(H.begin(), H.end());
    double Hmax = *std::max_element(H.begin(), H.end());
    double eps = 1e-12;
    double denom = std::max(Hmax - Hmin, eps);

    std::vector<RGB> cols(M.TS.size());
    for(size_t i=0;i<M.TS.size(); ++i){
        double t = (H[i] - Hmin) / denom;  // t in [0,1]
        cols[i] = hsv2rgb(t, 1.0, 1.0);    // teinte = t
    }
    if(saveCOFF("curvature_colored.off", M, cols))
        std::cout << "\nÉcrit: curvature_colored.off (couleurs = H en HSV)\n";
    else
        std::cout << "\nÉchec écriture curvature_colored.off\n";

    // -------- COURBURE SIGNEE --------
    std::vector<double> Hs;              // courbure signée
    M.courbureSignee(Hs, adj, Ai);

    // REVOIS (note) PEUT ETRE ENLEVER
    double meanEdge = 0.0; size_t m = 0;
    for (const auto& tr : M.TT) for (int e=0; e<3; ++e) {
        int a = tr.s[e], b = tr.s[(e+1)%3];
        meanEdge += norm(M.TS[b] - M.TS[a]); ++m;
    }
    meanEdge = (m? meanEdge/m : 1.0);
    for (auto& h : Hs) h *= meanEdge; 

    // ----- calcule maxAbs via quantile -----
    std::vector<double> absHs; absHs.reserve(Hs.size());
    for (double h : Hs) absHs.push_back(std::abs(h));
    std::sort(absHs.begin(), absHs.end());
    double q = 0.98; // 0.95..0.99 selon le contraste voulu
    size_t idx = (size_t)std::floor(q * (absHs.size()-1));
    double maxAbs = std::max(1e-12, absHs[idx]);

    // mapping BWR
    // std::vector<RGB> cols(M.TS.size());
    for (size_t i=0;i<M.TS.size(); ++i){
        double val = Hs[i] / maxAbs;
        double s = (val < -1.0) ? -1.0 : (val > 1.0 ? 1.0 : val);
        cols[i] = bwr(s);
        // cols[i] = hsvPalette(s);
        // cols[i] = rainbow((s+1.0)*0.5);
    }

    if (saveCOFF("curvature_signed_bwr.off", M, cols))
        std::cout << "\nÉcrit: curvature_signed_bwr.off (H signé, palette BWR)\n";
    else
        std::cout << "\nÉchec écriture curvature_signed_bwr.off\n";

    for (size_t i=0;i<M.TS.size(); ++i){
        double val = Hs[i] / maxAbs;
        double s = (val < -1.0) ? -1.0 : (val > 1.0 ? 1.0 : val);
        // cols[i] = bwr(s);
        cols[i] = hsvPalette(s);
        // cols[i] = rainbow((s+1.0)*0.5);
    }


    if (saveCOFF("curvature_signed_hsv.off", M, cols))
        std::cout << "\nÉcrit: curvature_signed_hsv.off (H signé, palette HSV)\n";
    else
        std::cout << "\nÉchec écriture curvature_signed_hsv.off\n";

    for (size_t i=0;i<M.TS.size(); ++i){
        double val = Hs[i] / maxAbs;
        double s = (val < -1.0) ? -1.0 : (val > 1.0 ? 1.0 : val);
        // cols[i] = bwr(s);
        // cols[i] = hsvPalette(s);
        cols[i] = rainbow((s+1.0)*0.5);
    }


    if (saveCOFF("curvature_signed_rainbow.off", M, cols))
        std::cout << "\nÉcrit: curvature_signed_rainbow.off (H signé, palette Rainbow)\n";
    else
        std::cout << "\nÉchec écriture curvature_signed_rainbow.off\n";

    return 0;
}
