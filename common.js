var max_lng=0;
var min_lng=999;
var max_lat=0;
var min_lat=99;
var i=0;
var gps=new Object();
function set_marks(map){
	
	for (var i = marks.length - 1; i >= 0; i--) {
		if(marks[i].longitude>0){
			if(marks[i].longitude>=max_lng){
				max_lng=marks[i].longitude;
			}
			if(marks[i].longitude<=min_lng){
				min_lng=marks[i].longitude;
			}
			if(marks[i].latitude>=max_lat){
				max_lat=marks[i].latitude;
			}
			if(marks[i].latitude<=min_lat){
				min_lat=marks[i].latitude;
			}
			set_mark(map,marks[i]);
		}
	}

	$(".popup-overlay").click(function(event) {
		$(this).removeClass('modal-overlay-visible');	
	});
}

function set_mark(map,mark){
	var point = new BMap.Point(mark.longitude,mark.latitude);
	if(mark.map_icon_img!=""){
		var icon = new BMap.Icon(mark.map_icon_img, new BMap.Size(40,40));
		var marker = new BMap.Marker(point,{icon:icon});
	}else{
		var marker = new BMap.Marker(point);
	}
	
	map.addOverlay(marker);
	var label = new BMap.Label(mark.title,{offset:new BMap.Size(20,-10)});
	label.setStyle({
		 border : '1px solid '+mark.label_color,
		 fontSize : "12px",
		 padding:"2px",
		 fontFamily:"微软雅黑",
	 });
	marker.setLabel(label);
	marker.addEventListener("click",get_click);
	label.addEventListener("click",get_click);
	function get_click(){
		var url="item"+mark.id+'.html';
		$("#mark_url").attr('href',url).click();
	}
}

function set_view_map(map){
	var points = [
		new BMap.Point(max_lng,max_lat),
		new BMap.Point(min_lng,min_lat)
   ];
	map.setViewport(points);
}


///////////////////////////////////////////////

var marks = [
{
	"id": "1",
	"title": "孽龙洞",
	"longitude": "113.940766",
	"latitude": "27.961864",
	"label_color": "#0F0",
	"map_icon_img": "chi.png"
},
{
	"id": "2",
	"title": "文湘生态休闲农庄",
	"longitude": "113.908967",
	"latitude": "27.7687",
	"label_color": "#F00",
	"map_icon_img": "zhu.png"
},
{
	"id": "3",
	"title": "达辉大酒店",
	"longitude": "113.801786",
	"latitude": "27.886127",
	"label_color": "#0F0",
	"map_icon_img": "chi.png"
} 
]




