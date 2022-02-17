using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factory
{
    internal class RectangleFactory : ShapeFactory
    {
        protected override IShape CreateShape()
        {
            return new Rectangle();
        }

        /*protected override IShape CreateShape(Point coord1, Point coord2)
        {
            return new Rectangle(coord1, coord2);
        }*/
    }
}
