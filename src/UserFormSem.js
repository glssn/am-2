import React from "react";
import {useForm} from "react-hook-form";

const FormExampleFieldError = () => {

  const {
    register,
    formState: {errors},
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = (data, e) => {
    console.log("Submit event", data);
    alert(JSON.stringify(data));
  };

  console.log(errors);

  return (
   <div className="register-form">
     <form onSubmit={handleSubmit(onSubmit)}>
       <div className="form-group">
         <label>Full Name</label>
         <input
           name="fullname"
           type="text"
           {...register('fullname')}
           className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
         />
         <div className="invalid-feedback">{errors.fullname?.message}</div>
       </div>

       <div className="form-group">
         <label>Username</label>
         <input
           name="username"
           type="text"
           {...register('username')}
           className={`form-control ${errors.username ? 'is-invalid' : ''}`}
         />
         <div className="invalid-feedback">{errors.username?.message}</div>
       </div>

       <div className="form-group">
         <label>Email</label>
         <input
           name="email"
           type="text"
           {...register('email')}
           className={`form-control ${errors.email ? 'is-invalid' : ''}`}
         />
         <div className="invalid-feedback">{errors.email?.message}</div>
       </div>

       <div className="form-group">
         <label>Password</label>
         <input
           name="password"
           type="password"
           {...register('password')}
           className={`form-control ${errors.password ? 'is-invalid' : ''}`}
         />
         <div className="invalid-feedback">{errors.password?.message}</div>
       </div>

       <div className="form-group">
         <label>Confirm Password</label>
         <input
           name="confirmPassword"
           type="password"
           {...register('confirmPassword')}
           className={`form-control ${
             errors.confirmPassword ? 'is-invalid' : ''
           }`}
         />
         <div className="invalid-feedback">
           {errors.confirmPassword?.message}
         </div>
       </div>

       <div className="form-group form-check">
         <input
           name="acceptTerms"
           type="checkbox"
           {...register('acceptTerms')}
           className={`form-check-input ${
             errors.acceptTerms ? 'is-invalid' : ''
           }`}
         />
         <label htmlFor="acceptTerms" className="form-check-label">
           I have read and agree to the Terms
         </label>
         <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
       </div>

       <div className="form-group">
         <button type="submit" className="btn btn-primary">
           Register
         </button>
         <button
           type="button"
           onClick={reset}
           className="btn btn-warning float-right"
         >
           Reset
         </button>
       </div>
     </form>
   </div>
 );
};

export default FormExampleFieldError;
