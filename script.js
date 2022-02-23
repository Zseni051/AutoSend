html, body {
    height: 100%;
    background-color: #0E1525;
}

.yellow_container {
    border-color: #FFEA7F;
    background-color: #0D1117;
    border-width: 0.1rem;
    border-style: solid;
    margin: 1em;
    height: auto;
}

span.msg,
span.choose {
    color: #555;
    padding: 5px 0 10px;
    display: inherit
}
  
/* Styling Selectbox */
.dropdown {
    background:#fff;
    border-radius:2px;
    box-shadow:0 0 2px #ccc;
    color:#474747;
    display:inline-block;
    font:14px sans-serif;
    height:100%;
    position:relative;
    text-align:left;
    transition:all .5s ease;
    width:200px;
}
.dropdown .dropdown-menu {
    background:#fff;
    border-radius:0 1px 2px 2px;
    box-shadow:0 1px 2px #ccc;
    display:none;
    font-family:sans-serif;
    left:0;
    list-style:none;
    margin-top:1px;
    max-height:144px;
    overflow:hidden;
    overflow-y:auto;
    padding:0;
    position:absolute;
    width:100%;
}
.dropdown .dropdown-menu li {
    cursor:pointer;
    padding:10px;
    transition:all .2s ease-in-out;
}
.dropdown .dropdown-menu li:active {
    background:#e2e2e2;
}
.dropdown .dropdown-menu li:hover {
    background:#f2f2f2;
}
.dropdown .select {
    cursor:pointer;
    display:block;
    padding:10px;
}
.dropdown .select > i {
    color:#888;
    cursor:pointer;
    float:right;
    font-size:13px;
    line-height:20px;
    transition:all .3s ease-in-out;
}
.dropdown.active .select > i {
    transform:rotate(-90deg);
}
.dropdown.active:hover,.dropdown.active {
    background:#f8f8f8;
    border-radius:2px 2px 0 0;
    box-shadow:0 0 4px #ccc;
}
.dropdown:active {
    background:#f8f8f8;
}
.dropdown:hover {
    box-shadow:0 0 4px #ccc;
}

/* Styling btn_additem */
#btn_additem1 {
    margin: auto;
}
/* Preview */
pre {
    background-color:#161B22;
    border-radius:1rem;
    color:#F0F6FC;
    margin:1.5em auto;
    margin-bottom: 1.5em;
    padding:2em;
    position:relative;
    text-align:left;
    width:95%;
    height: fit-content;
}

.copy-button {
    position: absolute;
    z-index: 1;
    right:1rem;
    top:1rem;
    width:40px;
    margin-left: auto;
    color:#8A939D;
    background-color:#21262D;
    border:1.5px solid #363B42;
    border-radius:.5rem;
    cursor:pointer;
    font-size:large;
    padding:.4rem .6rem .3rem;
}
.copy-button:hover,.copy-button:focus,.copy-button:active,.copy-button:active:hover {
    background-color:#30363D;
    border:1.5px solid #8A939D;
}

/* Fix Dimensions */
@media only screen and (max-width: 613px) {
	#autosendpng{
		width: 100%;
	}
}
@media only screen and (min-width: 613px) {
	#autosendpng{
		width: auto;
	}
}
