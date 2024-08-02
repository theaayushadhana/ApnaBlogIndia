// export const isAdmin = (req , res , next) => {
//     console.log('Authenticated' , req.isAuthenticated());
//     console.log('User' , req.user);
//     if(req.isAuthenticated() && req.user.role === 'admin'){
//         console.log('welcome admin ');
//         return next();
        
//     }
//     console.log('user is not admin');
//     // console.log(req.user);
//     res.status(403).json({message: 'Forbidden'});
// }

// export const isAdmin = (req, res, next) => {
//     console.log('Authenticated:', req.isAuthenticated());
//     console.log('User:', req.user);
  
//     if (req.isAuthenticated() && req.user && req.user.role === 'admin') {
//       return next();
//     }
//     res.status(403).json({ message: 'Forbidden' });
//   };
  

export const isAdmin = (req, res, next) => {
    console.log('Session:', req.session);
    console.log('Cookies:', req.cookies);
    console.log('Authenticated:', req.isAuthenticated());
    console.log('User:', req.user);
  
    // if (req.isAuthenticated() && req.user && req.user.role === 'admin') {
    //   return next();
    // }
    if (req.isAuthenticated() && req.user) {
      return next();
    }
    // res.status(403).json({ message: 'Forbidden' });
    res.status(401).json({ message: 'unauthroized' });
  };
  