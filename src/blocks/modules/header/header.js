  $(function(){
    $("#my-menu").mmenu({
      extensions: [
      "theme-light",
      "border-none",
      "position-front",
      "position-left",
      "shadow-page",
      "pagedim-black"
      ],
      navbar: {
        title:
        `
        <img src="../../img/svg/logo.svg" alt="">
        <a class="navbar-accout" href="#"><img src="./img/svg/user.svg" alt=""></a>
        `
      },
      "navbars": [
      {
       "position": "bottom",
       "content": [
       '<a href="#"><i class="fa fa-youtube-play"></i></a>',
       '<a href="#"><i class="fa fa-vk"></i></a>',
       '<a href="#"><i class="fa fa-facebook"></i></a>',
       '<a href="#"><i class="fa fa-instagram"></i></a>',
       ]
     }
     ]
   });
  });