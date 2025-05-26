document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
});

(function() {
    const translations = {
        pt: {
            menu_about: "Sobre",
            menu_classes: "Aulas",
            menu_plans: "Planos",
            menu_testimonials: "Depoimentos",
            menu_contact: "Contato",
            hero_h1: "Transforme seu Corpo. Transforme sua Vida.",
            hero_p: "Treine com os melhores profissionais e alcance seus objetivos com a MoveFit.",
            hero_btn: "Veja nossos planos",
            about_title: "Sobre a Academia",
            about_p: "Na MoveFit academia, acreditamos que a saúde e o bem-estar são para todos. Contamos com uma estrutura moderna, equipamentos de última geração e uma equipe preparada para te ajudar a alcançar sua melhor versão.",
            classes_title: "Nossas Aulas",
            class1_title: "Musculação",
            class1_desc: "Treinos personalizados com acompanhamento profissional para hipertrofia e condicionamento.",
            class2_title: "Yoga",
            class2_desc: "Aulas para melhorar a flexibilidade, equilíbrio e a saúde mental.",
            class3_title: "HIIT",
            class3_desc: "Treinamento Intervalado de Alta Intensidade para queima rápida de gordura.",
            class4_title: "Dança",
            class4_desc: "Aulas animadas para aumentar sua resistência e se divertir.",
            plans_title: "Planos & Valores",
            plan_basic_title: "Básico",
            plan_basic_price: "R$ 99,90/mês",
            plan_basic_item1: "Acesso livre à academia",
            plan_basic_item2: "1 sessão de avaliação física",
            plan_basic_item3: "Suporte online",
            plan_basic_btn: "Assine Agora",
            plan_premium_title: "Premium",
            plan_premium_price: "R$ 149,90/mês",
            plan_premium_item1: "Todos os benefícios do Básico",
            plan_premium_item2: "Aulas ilimitadas",
            plan_premium_item3: "Personal trainer incluso",
            plan_premium_btn: "Assine Agora",
            plan_vip_title: "VIP",
            plan_vip_price: "R$ 219,90/mês",
            plan_vip_item1: "Acesso 24h",
            plan_vip_item2: "Nutricionista e fisioterapia",
            plan_vip_item3: "Eventos exclusivos",
            plan_vip_btn: "Assine Agora",
            testimonials_title: "Depoimentos",
            testi1_quote: "\"A MoveFit mudou minha vida! Os profissionais são incríveis e o ambiente é motivador.\"",
            testi1_author: "- Mariana Silva",
            testi2_quote: "\"Treinos personalizados e acompanhamento que realmente funcionam. Recomendo 100%.\"",
            testi2_author: "- Carlos Eduardo",
            testi3_quote: "\"A academia tem equipamentos de última geração e a energia do lugar é sensacional.\"",
            testi3_author: "- Fernanda Costa",
            contact_title: "Contato",
            contact_label_name: "Nome",
            contact_label_email: "E-mail",
            contact_label_message: "Mensagem",
            contact_btn_submit: "Enviar",
            footer_text: "© 2024 MoveFit Academia - Todos os direitos reservados"
            },
        en: {
            menu_about: "About",
            menu_classes: "Classes",
            menu_plans: "Plans",
            menu_testimonials: "Testimonials",
            menu_contact: "Contact",
            hero_h1: "Transform Your Body. Transform Your Life.",
            hero_p: "Train with the best professionals and reach your goals with MoveFit.",
            hero_btn: "See our plans",
            about_title: "About the Gym",
            about_p: "At MoveFit gym, we believe health and well-being are for everyone. We offer modern facilities, state-of-the-art equipment, and a team ready to help you achieve your best version.",
            classes_title: "Our Classes",
            class1_title: "Bodybuilding",
            class1_desc: "Personalized training with professional supervision for muscle gain and conditioning.",
            class2_title: "Yoga",
            class2_desc: "Classes to improve flexibility, balance, and mental health.",
            class3_title: "HIIT",
            class3_desc: "High-Intensity Interval Training for rapid fat burning.",
            class4_title: "Dance",
            class4_desc: "Energetic classes to boost your endurance and have fun.",
            plans_title: "Plans & Pricing",
            plan_basic_title: "Basic",
            plan_basic_price: "R$ 99.90/month",
            plan_basic_item1: "Unlimited gym access",
            plan_basic_item2: "1 fitness assessment session",
            plan_basic_item3: "Online support",
            plan_basic_btn: "Sign Up Now",
            plan_premium_title: "Premium",
            plan_premium_price: "R$ 149.90/month",
            plan_premium_item1: "All Basic benefits",
            plan_premium_item2: "Unlimited classes",
            plan_premium_item3: "Includes personal trainer",
            plan_premium_btn: "Sign Up Now",
            plan_vip_title: "VIP",
            plan_vip_price: "R$ 219.90/month",
            plan_vip_item1: "24h access",
            plan_vip_item2: "Nutritionist and physiotherapy",
            plan_vip_item3: "Exclusive events",
            plan_vip_btn: "Sign Up Now",
            testimonials_title: "Testimonials",
            testi1_quote: "\"MoveFit changed my life! The staff is amazing and the vibe is super motivating.\"",
            testi1_author: "- Mariana Silva",
            testi2_quote: "\"Personalized workouts and support that really works. 100% recommended.\"",
            testi2_author: "- Carlos Eduardo",
            testi3_quote: "\"Top-notch equipment and a fantastic atmosphere.\"",
            testi3_author: "- Fernanda Costa",
            contact_title: "Contact",
            contact_label_name: "Name",
            contact_label_email: "Email",
            contact_label_message: "Message",
            contact_btn_submit: "Send",
            footer_text: "© 2024 MoveFit Gym - All rights reserved"
            }
        };
    

    let currentLang = 'pt';

    function translatePage(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        currentLang = lang;
        const btn = document.getElementById('btn-translate');
        btn.textContent = lang === 'pt' ? 'English' : 'Português';
        btn.setAttribute('aria-label', lang === 'pt' ? 'Translate page to English' : 'Traduzir página para português');
    }

    document.getElementById('btn-translate').addEventListener('click', () => {
        if (currentLang === 'pt') {
            translatePage('en');
        } else {
            translatePage('pt');
        }
    });

    // Inicializa com português
    translatePage('pt');
})();   