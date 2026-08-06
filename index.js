<!DOCTYPE html>
<html lang="es">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>AZRIELBOT API</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
}

body{
color:#fff;
text-align:center;
position:relative;
overflow-x:hidden;
background:#000;
}

/* Fondo */

body::before{
content:"";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:url("https://i.postimg.cc/P584VwS6/ce82d0135090887995fca223e012d2d7.jpg");
background-size:cover;
background-position:center;
filter:blur(10px);
transform:scale(1.1);
opacity:.45;
z-index:-2;
}

body::after{
content:"";
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.55);
z-index:-1;
}

header{

padding:50px 20px;

}

.logo{

font-size:55px;

}

h1{

font-size:40px;

color:#00ff7f;

margin-top:10px;

}

.sub{

font-size:20px;

color:#ddd;

margin-top:10px;

}

.online{

margin-top:20px;

font-size:22px;

color:#6CFF6C;

}

/* Tarjetas */

.card{

width:90%;

max-width:700px;

margin:25px auto;

padding:25px;

border-radius:20px;

background:rgba(20,20,20,.55);

backdrop-filter:blur(15px);

border:1px solid rgba(255,255,255,.1);

box-shadow:0 0 30px rgba(0,255,100,.25);

}

.card h2{

font-size:35px;

color:#00ff7f;

margin-bottom:25px;

}

.endpoint{

background:rgba(0,0,0,.55);

padding:18px;

border-radius:15px;

margin:15px 0;

transition:.3s;

}

.endpoint:hover{

background:#00ff7f;

}

.endpoint a{

color:#00ff7f;

font-size:23px;

text-decoration:none;

font-weight:bold;

}

.endpoint:hover a{

color:#000;

}

.info{

font-size:22px;

line-height:50px;

color:#ddd;

}

footer{

margin:50px 0;

font-size:18px;

color:#ccc;

}

</style>

</head>

<body>

<header>

<div class="logo">🤖</div>

<h1>AZRIELBOT API</h1>

<p class="sub">

API oficial de AZRIELBOT

</p>

<p class="online">

🟢 Estado: Online

</p>

</header>

<div class="card">

<h2>📡 Endpoints</h2>

<div class="endpoint">

<a href="/api/facto">

/api/facto

</a>

</div>

<div class="endpoint">

<a href="/api/frase">

/api/frase

</a>

</div>

<div class="endpoint">

<a href="/api/pinterest?q=anime">

/api/pinterest

</a>

</div>

<div class="endpoint">

<a href="/api/noticias">

/api/noticias

</a>

</div>

<div class="endpoint">

<a href="/api/tiktok?url=">

/api/tiktok

</a>

</div>

</div>

<div class="card">

<h2>ℹ Información</h2>

<div class="info">

Versión: <b>1.0.0</b><br>

Creador: <b>Yoel</b><br>

Servidor: <b>Vercel</b><br>

Node.js + Express

</div>

</div>

<footer>

© 2026 AZRIELBOT API

</footer>

</body>

</html>
