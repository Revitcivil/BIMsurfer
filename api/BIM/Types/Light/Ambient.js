BIM.Light.Ambient = BIM.Class(
{
	CLASS: 'BIM.Light.Ambient',
	__construct: function()
	{
		this.lightObject = new Array(
			{
				mode:"ambient",
				color:{ r:0.3, g:0.3, b:0.3 },
				diffuse:false,
				specular:false
			},
			{
				mode:"dir",
				color:{ r:1.0, g:1.0, b:1.0 },
				diffuse:true,
				specular:true,
				dir:{ x:-0.5, y:-0.5, z:-1.0 },
				space:"view"
			}
		);
	},

	activate: function()
	{
	},

	setSurfer: function(surfer)
	{
		this.surfer = surfer;
	}
});