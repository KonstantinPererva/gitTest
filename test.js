window.addEventListener('load',function () {
    if (document.querySelector('.goods-card')) {
        var Height = function (node) {
            var self= this;
            self.node = node;
            self.nodeHeightArray = [];

            self.height = function () {
                Array.prototype.forEach.call(self.node,function (el) {
                    self.nodeHeightArray.push(el.offsetHeight);
                });

                var nodeHeight = Math.max.apply(null, self.nodeHeightArray);

                Object.keys(self.node).forEach(function (t) {
                    self.node[t].style.height = nodeHeight + 'px';
                });
            };

            self.init = function () {
                self.height();
            };
        };

        var data = new Height(document.querySelectorAll('.goods-card-data_prod'));
        data.init();

        var title = new Height(document.querySelectorAll('.goods-card__title'));
        title.init();
    }
});