// index.htmlから抽出したJavaScript
// ハンバーガーメニューの動作

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // ハンバーガーアイコンの切り替え
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    // ナビゲーションリンクをクリックしたらメニューを閉じる
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    // スクロールアニメーション
    const fadeElements = document.querySelectorAll('.fade-in');
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('visible');
            }
        });
    }
    // 初期チェック
    checkFade();
    // スクロール時にチェック
    window.addEventListener('scroll', checkFade);
    // フォーム送信処理
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('デモのお申し込みありがとうございます。担当者から折り返しご連絡いたします。');
            demoForm.reset();
        });
    }
    // ヒーロー画像背景化
    document.querySelector('.hero').classList.add('bg-image');
}); 