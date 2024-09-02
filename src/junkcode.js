/**const Dropdown = React.createContext(
  open: false,
  setOpen: ()=>{},
});*/

//<Dropdown button="Open List" menu={[<Link to="/"className="menu-item">i1</Link>, <Link to="/"className="menu-item">i2</Link>]}/>
<img height="" src=""
alt="I am currently as software engineer fullstack developer who woeks on building deign frames and deployment as well as DevOps staging enigineer"/>

<Card sx={{ display: 'flex' }}>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography component="div" variant="h5">
      Live From Space
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      Mac Miller
    </Typography>
  </CardContent>
  <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
    <IconButton aria-label="previous">
      {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
    </IconButton>
    <IconButton aria-label="play/pause">
      <PlayArrowIcon sx={{ height: 38, width: 38 }} />
    </IconButton>
    <IconButton aria-label="next">
      {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
    </IconButton>
  </Box>
</Box>
<CardMedia
  component="img"
  sx={{ width: 151 }}
  image="/static/images/cards/live-from-space.jpg"
  alt="Live from space album cover"
/>
</Card>
=======================

.button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .button:hover {
    background-color: #0056b3;
  }

   
  @media screen (max-width: 767px) {
    .card {
      margin-bottom: 10px;
    }
    
    .card-header {
      padding: 5px;
    }
    
    .card-body {
      padding: 5px;
    }
    
    .card-footer {
      padding: 5px;
    }
  }

  .App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  
  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  margin-bottom: 20px;
  justify-content: left;
  min-height: fit-content;
  max-width: fit-content;
 font-size: 10px;
 transition: All .3s ease;
  

 <div class="input-icon icon-username"></div>


 <link href="https://www0.assets.heroku.com/cookies/2021.05.27/onetrust.min.css" rel="stylesheet" type="text/css" >


git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/seifbreizat/rubyprojectr.git
git push -u origin main