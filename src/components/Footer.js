import React from 'react';

const Footer = () => {
    return (
        <footer class="container-fluid border-top pt-4 bg-light">
        <div class="container footer">

            <div class="col-12 col-md-4 left">
                <h5 class="pb-3">About Us</h5>
                <span class="sign-border rounded p-2"><i class="fas fa-list"></i> TuDuList</span>
                <a href="#" class="block-links pt-3">Impressum</a>
                <a href="#" class="block-links">Privacy</a>
                <a href="#" class="block-links">Carrier</a>
            </div>

            <div class="col-12 col-md-4 center">
                <h5 class="pb-3">Contact TuDuList</h5>
                <a href="#" class="block-links">WhatsApp: +49 01 234 567 89</a>
                <a href="#" class="block-links">Facebook: facebook.com</a>
                <a href="#" class="block-links">Twitter: TuDuList</a>
                <a href="#" class="block-links">LinkedIn: TuDuList</a>
                <a href="mailto:name@email.com" class="block-links">TuDuList@info.com</a>
                <a href="https://github.com/timjoschneider/tuDuList" class="block-links">GitHub: TuDuList</a>
            </div>

            <div class="col-12 col-md-4 right">
                <h5 class="pb-3">Share TuDuList</h5>
                <a href="#" id="share-wa" class="sharer button">
                    <i class="fab fa-2x fa-whatsapp"></i>
                </a>
                <a href="#" id="share-fb" class="sharer button">
                    <i class="fab fa-2x fa-facebook"></i>
                </a>
                <a href="#" id="share-tw" class="sharer button">
                    <i class="fab fa-2x fa-twitter"></i>
                </a>
                <a href="#" id="share-li" class="sharer button">
                    <i class="fab fa-2x fa-linkedin"></i>
                </a>
                <a href="#" id="share-em" class="sharer button">
                    <i class="fas fa-2x fa-at"></i>
                </a>
                <a href="https://github.com/timjoschneider/tuDuList" title="GitHub Profile" target="_blank">
                    <i class="fab fa-github fa-2x"></i>
                </a>
            </div>

            <div class="col-12 py-5 center">
                2021 © Copyright: Emeline, Alicia, Tim
                <a class="text-white link-end" href="#">TuDuList</a>
            </div>
        </div>


    </footer>
    );
}

export default Footer;
