/**
 * @fileoverview 层管理器
 * @authors
	Tony.Liang <pillar0514@gmail.com>
 * @description 一个平面可以有多个层，层管理器用来加载所需层
 */
define('mods/ctrl/surface',function(require,exports,module){

	var $ = require('lib');
	var $controller = require('lib/mvc/controller');

	var Surface = $controller.extend({
		defaults : {
			parent : null
		},
		build : function(){
			this.children = {};
		},
		load : function(name, options){
			var conf = this.conf;
			var that = this;
			lithe.use('mods/view/surface/' + name, function(ChildSurface){
				options = options || {};
				options.parent = conf.parent;
				var surface = new ChildSurface(options);
				that.children[name] = surface;
			});
		}
	});

	module.exports = Surface;

});
