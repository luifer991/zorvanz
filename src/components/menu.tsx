import { motion } from 'framer-motion'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/menu.css'


function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu-container">
            <motion.div className="hamburger" onClick={toggleMenu}>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 12 : 0 }}
                ></motion.div>
                <motion.div
                    animate={{ opacity: isOpen ? 0 : 1 }}
                ></motion.div>
                <motion.div
                    animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -12 : 0 }}
                ></motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
                transition={{ duration: 0.3 }}
                className={`menu-options ${isOpen ? 'open' : ''}`}
            >
                <ul className="navbar__links">
                    <motion.li
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
                        transition={{ delay: 0.2, type: 'just' }}
                    ><Link to="/">Home</Link></motion.li>
                    <motion.li
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
                        transition={{ delay: 0.3, type: 'just' }}
                    ><Link to="/about">Quiénes Somos</Link></motion.li>
                    <motion.li
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: isOpen ? 0 : -100, opacity: isOpen ? 1 : 0 }}
                        transition={{ delay: 0.4, type: 'just' }}
                    ><Link to="/catalog">Catálogo</Link></motion.li>
                </ul>
            </motion.div>
        </div>
    );
};

export default Menu;