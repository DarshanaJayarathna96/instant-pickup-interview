import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>About Us</h4>
                        <p>We are a leading web design agency based in New York City. We specialize in creating stunning and user-friendly websites that drive results for our clients.</p>
                    </div>
                    <div class="col-md-4">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/services/web-design">Web Design</a></li>
                            <li><a href="/services/ux-design">UX Design</a></li>
                            <li><a href="/services/ecommerce">E-commerce Solutions</a></li>
                            <li><a href="/services/seo">SEO Services</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Contact Us</h4>
                        <p>123 Main St, New York, NY 10001</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;