(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/Vader.46ed4951.png"},109:function(e,t,a){e.exports=a(289)},114:function(e,t,a){},116:function(e,t,a){},289:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),l=a.n(s),i=(a(114),a(7)),c=a(8),o=a(10),m=a(9),h=a(11),p=a(101),u=a.n(p),d=(a(116),a(106)),E=a.n(d),v=a(33),f=a.n(v),y=a(105),g=a.n(y),b=a(104),O=a.n(b),j=a(68),L=a(22),S=a(6),w=a.n(S),k="https://swapi.co/api/",N=a(31),C=a(32),A=a(102),M=a.n(A);N.b.add(C.a,C.b,C.d);var T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={sortType:a.props.sortType,query:""},a.handleClick=function(){var e="inc"===a.state.sortType?"desc":"inc";a.setState({sortType:e}),a.props.sort(e)},a.search=function(e){a.setState({query:e.target.value,sortType:"normal"},function(){a.props.search(a.state.query)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-wrapper"},r.a.createElement(L.a,{className:"normal"!==this.state.sortType?"active-sort point-icon":"point-icon",onClick:this.handleClick,icon:"inc"===this.state.sortType?"arrow-up":"arrow-down"}),r.a.createElement("form",{noValidate:!0,autoComplete:"off"},r.a.createElement(M.a,{name:"search-field",id:"outlined-search",label:"Search field",type:"text",variant:"outlined",onChange:this.search})))}}]),t}(r.a.Component),D=a(290);N.b.add(C.c,C.e);var _=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).CancelToken=w.a.CancelToken,a.source=a.CancelToken.source(),a.state={type:"films",data:[],isLoading:!1,next:"",loadMore:!1,sortType:"normal"},a.sortData=function(e){a.setState({data:a.state.data.sort(function(t,a){var n=t.name?"name":"title";return t[n].toLowerCase()<a[n].toLowerCase()?"desc"===e?-1:1:t[n].toLowerCase()>a[n].toLowerCase()?"desc"===e?1:-1:0}),sortType:e})},a.search=function(e){a.setState({data:[],isSearching:!0}),a.callServer("".concat(k).concat(a.props.type,"/?search=").concat(e),"search")},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"callServer",value:function(e){var t=this;this.source&&this.source.cancel("Only one request allowed at a time."),this.source=w.a.CancelToken.source(),w.a.get(e,{cancelToken:this.source.token}).then(function(e){t.setState({isLoading:!1,data:Object(j.a)(t.state.data).concat(Object(j.a)(e.data.results)),next:e.data.next,isSearching:!1,sortType:"normal"}),t.state.next?(t.setState({loadMore:!0}),t.callServer(t.state.next)):t.setState({loadMore:!1})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.callServer("".concat(k).concat(this.props.type,"/"))}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof this.source&&this.source.cancel("Operation canceled")}},{key:"render",value:function(){if(this.state.isLoading)return r.a.createElement(L.a,{className:"loading",icon:"sun"});var e=this.state.data.map(function(e,t){var a=e.name?e.name:e.title;return r.a.createElement("div",{className:"item",key:t},r.a.createElement(L.a,{className:"point-icon",icon:"jedi"}),r.a.createElement("p",null,r.a.createElement(D.a,{to:{pathname:"/films/"+a,state:e.url}},a)))});return r.a.createElement("div",{className:"inbox"},r.a.createElement(T,{sortType:this.state.sortType,search:this.search,sort:this.sortData,updateData:this.updateData}),this.state.data.length||this.state.isLoading||this.state.isSearching?r.a.createElement("span",{hidden:!0}):r.a.createElement("div",{className:"item"},r.a.createElement(L.a,{className:"point-icon",icon:"jedi"}),r.a.createElement("p",null,"Unfortunately there aren't any ",this.props.type," according to your search")),this.state.loadMore?r.a.createElement("div",{className:"item load-more"},r.a.createElement(L.a,{className:"point-icon",icon:"jedi"}),r.a.createElement("p",null,"Load more ",this.props.type)):r.a.createElement("span",{hidden:!0}),this.state.isSearching?r.a.createElement("div",{className:"item load-more"},r.a.createElement(L.a,{className:"point-icon",icon:"jedi"}),r.a.createElement("p",null,"Searching ",this.props.type)):r.a.createElement("span",{hidden:!0}),e)}}]),t}(r.a.Component);function x(e){return r.a.createElement(O.a,{component:"div",style:{padding:24}},e.children)}var P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(g.a,{position:"static"},r.a.createElement(E.a,{value:this.state.value,onChange:this.handleChange},r.a.createElement(f.a,{label:"Films"}),r.a.createElement(f.a,{label:"Peoples"}),r.a.createElement(f.a,{label:"Planets"}),r.a.createElement(f.a,{label:"Species"}),r.a.createElement(f.a,{label:"Starships"}),r.a.createElement(f.a,{label:"Vehicles"}))),0===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"films"})),1===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"people"})),2===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"planets"})),3===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"species"})),4===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"starships"})),5===this.state.value&&r.a.createElement(x,null,r.a.createElement(_,{type:"vehicles"}))))}},{key:"componentDidMount",value:function(){}}]),t}(r.a.Component),I=a(3),V=a.n(I),F=a(26),G=a.n(F),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={planets:a.props.planets,isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.planets&&w.a.all(this.state.planets.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,planets:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){if(this.state.isLoading||!this.state.planets)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Planets"),r.a.createElement("hr",null),"PLANETS IS LOADING!");if(!this.state.isLoading&&!this.state.planets.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Planets"),r.a.createElement("hr",null),"There is no planet according the entity");var e=this.state.planets.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/planets/"+e.name,state:e.url}},e.name))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Planets"),r.a.createElement("hr",null),e,r.a.createElement("hr",null))}}]),t}(r.a.Component),q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={vehicles:a.props.vehicles,isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.vehicles&&w.a.all(this.state.vehicles.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,vehicles:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){if(this.state.isLoading||!this.state.vehicles)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Vehicles"),r.a.createElement("hr",null),"Vehisles is loading!",r.a.createElement("hr",null));if(!this.state.isLoading&&!this.state.vehicles.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Vehicles"),r.a.createElement("hr",null),"There are not any vehicles according the entity",r.a.createElement("hr",null));var e=this.state.vehicles.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/vehicles/"+e.name,state:e.url}},e.name))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Vehicles"),r.a.createElement("hr",null),e,r.a.createElement("hr",null))}}]),t}(r.a.Component),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={starships:a.props.starships,isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.starships&&w.a.all(this.state.starships.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,starships:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){if(this.state.isLoading||!this.state.starships)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Starships"),r.a.createElement("hr",null),"STARSHIPS IS LOADING!");if(!this.state.isLoading&&!this.state.starships.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Starships"),r.a.createElement("hr",null),"There is no starship according the entity");var e=this.state.starships.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/starships/"+e.name,state:e.url}},e.name))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Starships"),r.a.createElement("hr",null),e,r.a.createElement("hr",null))}}]),t}(r.a.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={species:a.props.species,isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.species&&w.a.all(this.state.species.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,species:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){if(this.state.isLoading||!this.state.species)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Species"),r.a.createElement("hr",null),"SPECIES IS LOADING!");if(!this.state.isLoading&&!this.state.species.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Species"),r.a.createElement("hr",null),"There is no specie according the entity");var e=this.state.species.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/species/"+e.name,state:e.url}},e.name))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Species"),r.a.createElement("hr",null),e,r.a.createElement("hr",null))}}]),t}(r.a.Component),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:a.props.characters,isLoading:!1,type:a.props.type},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.characters&&w.a.all(this.state.characters.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,characters:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){var e=this.state.type.charAt(0).toUpperCase()+this.state.type.slice(1);if(this.state.isLoading||!this.state.characters)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},e),r.a.createElement("hr",null),e," is loading!");if(!this.state.isLoading&&!this.state.characters.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},e),r.a.createElement("hr",null),"There is no ",this.state.type," according the entity");var t=this.state.characters.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/characters/"+e.name,state:e.url}},e.name))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},e),r.a.createElement("hr",null),t,r.a.createElement("hr",null))}}]),t}(r.a.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.title," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},e.opening_crawl),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Director of the film is ",e.director),r.a.createElement("hr",null),r.a.createElement(V.a,{component:"p"},"Film was realised in ",new Date(e.release_date).toLocaleDateString()),r.a.createElement("hr",null),r.a.createElement(V.a,{component:"p"},"Producer: ",e.producer),r.a.createElement("hr",null)),r.a.createElement(H,{planets:this.state.data.planets}),r.a.createElement(U,{type:"characters",characters:this.state.data.characters}),r.a.createElement(B,{species:this.state.data.species}),r.a.createElement(q,{vehicles:this.state.data.vehicles}),r.a.createElement(W,{starships:this.state.data.starships}))}}]),t}(r.a.Component),R=a(293),$=a(292),z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={films:a.props.films,isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.state.films&&w.a.all(this.state.films.map(function(e){return w.a.get(e)})).then(w.a.spread(function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];e.setState({isLoading:!1,films:a.map(function(e){return e.data})})}))}},{key:"render",value:function(){if(this.state.isLoading||!this.state.films)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Films"),r.a.createElement("hr",null),"Films is loading");if(!this.state.isLoading&&!this.state.films.length)return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Films"),r.a.createElement("hr",null),"There is no film according the entity");var e=this.state.films.map(function(e,t){return r.a.createElement(G.a,{key:t},r.a.createElement(D.a,{to:{pathname:"/films/"+e.title,state:e.url}},e.title))});return r.a.createElement("div",{className:"details-list"},r.a.createElement(V.a,{variant:"h5",component:"h3"},"Films"),r.a.createElement("hr",null),e,r.a.createElement("hr",null))}}]),t}(r.a.Component),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.name," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Rotation period: ",e.rotation_period),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Orbital period: ",e.orbital_period),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Gravity: ",e.gravity),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Population: ",e.population),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Terrain: ",e.terrain),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Climate: ",e.climate),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Water: ",e.surface_water),r.a.createElement("hr",null)),r.a.createElement(U,{type:"residents",characters:this.state.data.residents}),r.a.createElement(z,{films:this.state.data.films}))}}]),t}(r.a.Component),Q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.name," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Model: ",e.model),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Manufacturer: ",e.manufacturer),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Starship_class: ",e.starship_class),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"length: ",e.length),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Consumables: ",e.consumables),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Max athmosphering speed: ",e.max_atmosphering_speed),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Crew: ",e.crew),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"The Maximum number of Megalights: ",e.MGLT),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Cost: ",e.cost_in_credits),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"The maximum length of time that this starship can provide consumables for its entire crew without having to resupply: ",e.cargo_capacity),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Passengers: ",e.passengers),r.a.createElement("hr",null)),r.a.createElement(U,{type:"pilots",characters:this.state.data.pilots}),r.a.createElement(z,{films:this.state.data.films}))}}]),t}(r.a.Component),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.name," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Model: ",e.model),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Manufacturer: ",e.manufacturer),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Vehicle class: ",e.vehicle_class),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"length: ",e.length),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Consumables: ",e.consumables),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Max athmosphering speed: ",e.max_atmosphering_speed),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Crew: ",e.crew),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Cost: ",e.cost_in_credits),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"The maximum length of time that this vehicle can provide consumables for its entire crew without having to resupply: ",e.cargo_capacity),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Passengers: ",e.passengers),r.a.createElement("hr",null)),r.a.createElement(U,{type:"pilots",characters:this.state.data.pilots}),r.a.createElement(z,{films:this.state.data.films}))}}]),t}(r.a.Component),Y=a(67),Z=a.n(Y),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={planet:a.props.planet,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.props.planet&&w.a.get(this.props.planet).then(function(t){e.setState({isLoading:!1,data:t.data})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement("span",null,"'Homeworld is loading'"):r.a.createElement(Z.a,null,r.a.createElement(D.a,{to:{pathname:"/planets/"+e.name,state:e.url}},e.name))}}]),t}(r.a.Component),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.name," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Gender: ",e.gender),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Height: ",e.height," cm"),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Mass: ",e.mass," kg"),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Birth: ",e.birth_year),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Skin color: ",e.skin_color),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Eye color: ",e.eye_color),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Homeworld: ",r.a.createElement(ee,{planet:e.homeworld})),r.a.createElement("hr",null)),r.a.createElement(B,{species:this.state.data.species}),r.a.createElement(W,{starships:this.state.data.starships}),r.a.createElement(q,{vehicles:this.state.data.vehicles}),r.a.createElement(z,{films:this.state.data.films}))}}]),t}(r.a.Component),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={url:a.props.location.state,data:{},isLoading:!1},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),w.a.get(this.state.url).then(function(t){e.setState({data:t.data,isLoading:!1})})}},{key:"render",value:function(){var e=this.state.data;return this.state.isLoading?r.a.createElement(L.a,{className:"loading",icon:"sun"}):r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"details-inbox"},r.a.createElement(V.a,{variant:"h4",component:"h3"},e.name," details page."),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Classification: ",e.gender),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Designation: ",e.designation),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Language: ",e.language),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body2",component:"p"},"Average height: ",e.average_height," cm"),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Average lifespan: ",e.average_lifespan," years"),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Hair color: ",e.hair_colors),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Skin color: ",e.skin_colors),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Eye color: ",e.eye_colors),r.a.createElement("hr",null),r.a.createElement(V.a,{variant:"body1",component:"p"},"Homeworld: ",e.homeworld&&r.a.createElement(ee,{planet:e.homeworld})),r.a.createElement("hr",null)),r.a.createElement(U,{type:"people",characters:this.state.data.people}),r.a.createElement(z,{films:this.state.data.films}))}}]),t}(r.a.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(D.a,{to:"/"}," ",r.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"})),r.a.createElement("p",null,"Choose your side")),r.a.createElement(R.a,null,r.a.createElement($.a,{exact:!0,path:"/",component:P}),r.a.createElement($.a,{path:"/films/:id",component:J}),r.a.createElement($.a,{path:"/planets/:id",component:K}),r.a.createElement($.a,{path:"/starships/:id",component:Q}),r.a.createElement($.a,{path:"/vehicles/:id",component:X}),r.a.createElement($.a,{path:"/characters/:id",component:te}),r.a.createElement($.a,{path:"/species/:id",component:ae})))}}]),t}(n.Component),re=a(291);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(re.a,null,r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[109,2,1]]]);
//# sourceMappingURL=main.9680e9a0.chunk.js.map