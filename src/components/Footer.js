import styles from './Footer.module.css';
const Footer = ({ children }) => {
	return <footer className={styles.Footer}>{children}</footer>;
};

export default Footer;
