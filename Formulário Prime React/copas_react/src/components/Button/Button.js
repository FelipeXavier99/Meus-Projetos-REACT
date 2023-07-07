function Button({ href, text }) {
    return (
      <a href={href}>
        <input className="button" type="button" value={text} />
      </a>
    );
  }
  
  export default Button;
  