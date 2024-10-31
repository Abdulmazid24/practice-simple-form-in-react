import { useState } from 'react';

const StatefulForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(null);
  const [error, setError] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be 6 characters or longer');
    } else {
      setError('');
    }
  };
  const handleEmailChange = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="card w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-10 font-semibold bg-amber-50 ">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={handleEmailChange}
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            onChange={handlePassword}
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        {error && <p>{error}</p>}
        <div className="form-control mt-6">
          <button className="btn bg-amber-200">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StatefulForm;
