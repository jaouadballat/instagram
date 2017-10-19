<template>
	<div class="box">
		<div id="wrapper" v-for="item in data">
			<img :src="item.images.standard_resolution.url" height="300" width="300" />
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		computed: {

			data(){
				return this.$store.getters.getData
			}
		}
	}
</script>

<style>
	*{margin:0; padding:0;}
html,body{height:100%;}

#wrapper{
  width:300px; 
  height:300px;
  border:10px solid white;
  border-radius:16px;
  position:relative;
  background:white;
  margin: 30px 10px;
  box-shadow:
    3px 3px 3px 3px rgba(40,40,40,0.2); 
}
#wrapper:before, #wrapper:after{
    content:"";
  display:block;
  width:98%;
  height:98%;
  background:white;
  box-shadow:
    3px 3px 3px 3px rgba(40,40,40,0.2);
  position:absolute;
  border:10px solid white;
  border-radius:16px;
  transition: all 0.5s ease-out;
}
#wrapper:before{
  z-index:-9; 
  transform:rotate(-5deg);
  top:-15px;
  left:-20px;
}
#wrapper:after {
  z-index:-10;
  transform:rotate(6deg);
  top:0px;
  left:20px;
}
#wrapper:hover:before, #wrapper:hover:after{
    transform:rotate(0);
}
#wrapper:hover:before{top:10px; left:0px;}
#wrapper:hover:after{top:-15px; left:0px;}
img{
  border-radius:10px; 
  opacity:0.7;
  transition:opacity 0.5s ease;
}
#wrapper:hover img {
    opacity:1;
}
.box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}


</style>