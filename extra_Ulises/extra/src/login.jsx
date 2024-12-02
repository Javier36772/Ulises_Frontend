import React from 'react';

function Login() {
  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        <form>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Correo</label>
            <input
              type="email"
              id="email"
              placeholder="ulises@gmail.com"
              required
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Contraseña</label>
            <input
              type="password"
              id="password"
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.loginButton}>
            Iniciar Sesión
          </button>
        </form>
        <div style={styles.loginFooter}>
          <a href="#" style={styles.link}></a>
          <a href="#" style={styles.link}></a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f2f5',
    margin: 0,
  },
  loginBox: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '25px',
    fontSize: '24px',
    color: '#222831',
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '8px',
    color: '#4b5563',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    backgroundColor: '#f9fafb',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  inputFocus: {
    borderColor: '#2563eb',
  },
  loginButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  loginButtonHover: {
    backgroundColor: '#1d4ed8',
  },
  loginFooter: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
  },
  link: {
    textDecoration: 'none',
    color: '#2563eb',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  linkHover: {
    color: '#1d4ed8',
  },
};

export default Login;