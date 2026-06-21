function portfolioData() {
    return {
        currentLang: 'en',
        animatedTitle: '',
        titleIndex: 0,
        charIndex: 0,
        isDeleting: false,
        isSubmitting: false,
        
        translations: {
            en: {
                navHome: 'Home', navAbout: 'About Me', navServices: 'Services', navProjects: 'Portfolio', navContact: 'Contact Me',
                btnHire: 'Let\'s Talk', heroBadge: 'Open for remote opportunities',
                heroGreet: 'Hi, I am', heroName: 'Mohamed Aynouche',
                heroDesc: 'Passionate Front End Developer, Web Designer, and Game Developer specializing in crafting highly interactive user interfaces, clean visual experiences, and engaging web-based games.',
                btnWork: 'Explore Portfolio', btnConnect: 'Get in Touch',
                aboutTitle: 'Crafting Digital Masterpieces',
                aboutText: 'I bridge the gap between creative visual design and responsive code. Having mastered HTML, CSS, and JavaScript, I focus on building lightweight, fast, and memorable interactive experiences for the web and browser gaming.',
                statExp: 'Structure', statExpD: 'Semantic HTML5 components.',
                statProj: 'Style', statProjD: 'Modern fluid CSS responsive UI.',
                statSuccess: 'Logic', statSuccessD: 'Interactive, fast JavaScript.',
                statSupport: 'Gaming', statSupportD: 'Indie logic loop rendering.',
                servicesHeadline: 'Expertise Solutions',
                servicesSubtitle: 'Tailored technology development architecture configured explicitly to scale up your projects.',
                s1Title: 'Front End Apps', s1Desc: 'State-of-the-art interactive engines built with custom, lightweight, and modern JavaScript structures.',
                s2Title: 'UI / UX Design', s2Desc: 'Pixel-perfect UI design mockups designed around high-conversion usability frameworks.',
                s3Title: 'Game Development', s3Desc: 'Engaging, browser-ready 2D games and interactive experiences programmed natively.',
                
                projectsHeadline: 'Featured Masterpieces', 
                fAll: 'All Work', fWeb: 'Web Projects', fGames: 'Game Projects', statusSoon: 'Coming Soon', statusLive: 'Live Demo',

                // المشروع الجديد المضاف
                cvTitle: 'AI-Powered CV Builder',
                cvDesc: 'A smart web-based application designed to help users build, style, and export professional, responsive resumes instantly with live layout rendering.',

                wp1Title: 'The Cyber-Grid Ecosystem',
                wp1Desc: 'Unleash ultra-performance. An immersive digital interface forged to break standard web limitations and change how you browse data forever.',
                wp2Title: 'Aura UI Interactive Lab',
                wp2Desc: 'Where aesthetics meet absolute speed. A visual playground engineered to deliver raw emotion through fluid CSS variables and smooth interactions.',
                wp3Title: 'Nexus Stream Portfolio',
                wp3Desc: 'The ultimate canvas for creative minds. A ultra-responsive, layout-shifting marvel built with pure semantic structure and clean styling.',

                gp1Title: 'Shadow Runner: Neon Drift',
                gp1Desc: 'Feel the rhythm of the city. A fast-paced, grid-locked arcade runner written natively in JavaScript where every split-second decision counts.',
                gp2Title: 'Pixel Mage Odyssey',
                gp2Desc: 'Step into the realm of spells. An atmospheric 2D retro action-RPG engine engineered directly for browser screens using optimized math physics.',
                gp3Title: 'Cosmic Havoc: Starfighter',
                gp3Desc: 'Defend the deep cosmos. A chaotic space-shooter pushing modern rendering loops to the absolute edge with intense waves and smooth rendering.',
                
                contactHeadline: 'Let\'s Discuss Your Next Move',
                contactDesc: 'Drop a message below to kickstart technical strategy planning or production engineering requirements instantly.',
                contactBtn: 'Send Message'
            },
            fr: {
                navHome: 'Accueil', navAbout: 'À Propos', navServices: 'Services', navProjects: 'Portfolio', navContact: 'Contactez-Moi',
                btnHire: 'Parlons-en', heroBadge: 'Ouvert aux opportunités',
                heroGreet: 'Bonjour, je suis', heroName: 'Mohamed Aynouche',
                heroDesc: 'Développeur Front End, Web Designer et Développeur de Jeux passionné, spécialisé dans la création d\'interfaces hautement interactives et de jeux web captivants.',
                btnWork: 'Explorer le Portfolio', btnConnect: 'Prendre Contact',
                aboutTitle: 'Façonner des Chefs-d\'Œuvre Digitaux',
                aboutText: 'Je fais le lien entre le design visuel créatif et le code réactif. Ayant maîtrisé HTML, CSS et JavaScript, mon objectif est d\'écrire du code propre pour offrir une expérience utilisateur et de jeu unique.',
                statExp: 'Structure', statExpD: 'Composants sémantiques HTML5.',
                statProj: 'Style', statProjD: 'UI responsive CSS moderne et fluide.',
                statSuccess: 'Logique', statSuccessD: 'JavaScript interactif et rapide.',
                statSupport: 'Jeux Vidéo', statSupportD: 'Rendu de boucles logiques indépendantes.',
                servicesHeadline: 'Mes Prestations',
                servicesSubtitle: 'Des architectures technologiques sur mesure conçues spécifiquement pour propulser la valeur de vos projets.',
                s1Title: 'Applications Front End', s1Desc: 'Moteurs interactifs de pointe construits avec des structures JavaScript modernes et légères.',
                s2Title: 'Design UI / UX', s2Desc: 'Maquettes au pixel près élaborées autour de frameworks d\'utilisabilité à haute conversion.',
                s3Title: 'Développement de Jeux', s3Desc: 'Jeux 2D interactifs pour navigateur, programmés nativement pour une fluidité totale.',
                
                projectsHeadline: 'Chefs-d\'Œuvre Sélectionnés', 
                fAll: 'Tous', fWeb: 'Projets Web', fGames: 'Projets de Jeux', statusSoon: 'Bientôt Disponible', statusLive: 'Démo Live',

                // المشروع الجديد المضاف بالفرنسية
                cvTitle: 'Générateur de CV Intelligent',
                cvDesc: 'Une application web intuitive conçue pour aider les utilisateurs à créer, styliser et exporter des CV professionnels et réactifs avec un rendu en temps réel.',

                wp1Title: 'L\'Écosystème Cyber-Grid',
                wp1Desc: 'Libérez l\'ultra-performance. Une interface numérique immersive forgée pour briser les limites du web standard et transformer votre vision des données.',
                wp2Title: 'Aura UI: Laboratoire Interactif',
                wp2Desc: 'Quand l\'esthétique rencontre la vitesse absolue. Un terrain de jeu visuel conçu pour transmettre de pures émotions via des interactions fluides.',
                wp3Title: 'Portfolio Nexus Stream',
                wp3Desc: 'Le canevas ultime pour les esprits créatifs. Une merveille ultra-responsive qui s\'adapte à vos besoins avec une structure sémantique parfaite.',

                gp1Title: 'Shadow Runner: Neon Drift',
                gp1Desc: 'Ressentez le rythme de la ville. Un jeu de course d\'arcade effréné codé nativement en JavaScript où chaque milliseconde est cruciale.',
                gp2Title: 'Pixel Mage Odyssey',
                gp2Desc: 'Entrez dans le royaume des sortilèges. Un action-RPG rétro en 2D conçu pour les navigateurs avec des calculs physiques ultra-optimisés.',
                gp3Title: 'Cosmic Havoc: Starfighter',
                gp3Desc: 'Défendez le cosmos profond. Un space-shooter chaotique qui pousse les boucles de rendu modernes à leurs limites avec des vagues d\'ennemis intenses.',

                contactHeadline: 'Discutons de Votre Projet',
                contactDesc: 'Envoyez un message dès maintenant pour planifier la stratégie technique ou démarrer l\'ingénierie de production.',
                contactBtn: 'Envoyer le Message'
            }
        },

        getTitles() {
            return this.currentLang === 'en' 
                ? ['Front End Developer', 'UI/UX Web Designer', 'Game Developer']
                : ['Développeur Front End', 'Designer Web UI/UX', 'Développeur de Jeux'];
        },

        init() { 
            this.typeEffect(); 
        },

        t(key) {
            return this.translations[this.currentLang][key] || '';
        },

        toggleLang() {
            this.currentLang = this.currentLang === 'en' ? 'fr' : 'en';
            this.animatedTitle = '';
            this.titleIndex = 0;
            this.charIndex = 0;
            this.isDeleting = false;
        },

        updateCursor(e) {
            const cursor = document.getElementById('custom-cursor');
            if(cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        },

        typeEffect() {
            const titles = this.getTitles();
            const currentTitle = titles[this.titleIndex];
            
            if (this.isDeleting) {
                this.animatedTitle = currentTitle.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                this.animatedTitle = currentTitle.substring(0, this.charIndex + 1);
                this.charIndex++;
            }

            let typeSpeed = this.isDeleting ? 40 : 100;

            if (!this.isDeleting && this.charIndex === currentTitle.length) {
                typeSpeed = 2000; 
                this.isDeleting = true;
            } else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.titleIndex = (this.titleIndex + 1) % titles.length;
                typeSpeed = 500; 
            }

            setTimeout(() => this.typeEffect(), typeSpeed);
        },

        submitForm(event) {
            const form = event.target;
            this.isSubmitting = true;

            const endpoint = "https://formspree.io/f/mgobdpoo";

            fetch(endpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                this.isSubmitting = false;
                if (response.ok) {
                    alert(this.currentLang === 'en' ? 'Message sent successfully!' : 'Message envoyé avec succès!');
                    form.reset();
                } else {
                    alert(this.currentLang === 'en' ? 'Oops! There was a problem submitting your form.' : 'Oups! Un problème est survenu lors de l\'envoi.');
                }
            })
            .catch(error => {
                this.isSubmitting = false;
                alert(this.currentLang === 'en' ? 'Connection error. Please retry.' : 'Erreur de connexion. Veuillez réessayer.');
            });
        }
    }
}