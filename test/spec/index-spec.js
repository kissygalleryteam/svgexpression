KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('svgexpression', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/svgexpression/0.0.1/']});