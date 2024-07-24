import React from 'react';
import '../styles/about.css';

const AboutPage = () => {
    return (
        <div className="about-container">
            <section className="section">
                <h2>About Our Library</h2>
                <p>
                    Welcome to our Intelligent Library Management System. Our library offers a vast collection of books across various genres, ensuring that there's something for everyone. Whether you're a student, a professional, or just a book lover, our library is here to cater to your reading needs.
                </p>
            </section>
            <section className="section">
                <h3>Our Mission</h3>
                <p>
                    Our mission is to provide easy access to knowledge and resources through an advanced and user-friendly digital platform. We aim to create an engaging and efficient experience for all our users, making it easier for them to find, borrow, and return books.
                </p>
            </section>
            <section className="section">
                <h3>The Team</h3>
                <p>
                    Our dedicated team of developers, librarians, and support staff work tirelessly to ensure that our library remains up-to-date and functional. Meet the minds behind our library:
                </p>
                <ul>
                    <li><strong>Franck Blackman</strong> - Lead Developer</li>
                    <li><strong>Eduard Whiteman</strong> - Librarian</li>
                    <li><strong>Oliver Queen</strong> - UX/UI Designer</li>
                    <li><strong>Tomy Merlyn</strong> - Customer Support</li>
                </ul>
            </section>
            <section className="section">
                <h3>Contact Us</h3>
                <p>
                    If you have any questions or need assistance, please don't hesitate to reach out to us at <a href="mailto:azoumaelisee98@gmail.com">azoumaelisee98@gmail.com</a>. We're here to help!
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
