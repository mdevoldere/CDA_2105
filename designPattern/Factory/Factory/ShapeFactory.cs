using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factory
{
    internal abstract class ShapeFactory
    {
        public IShape GetShape()
        {
            return CreateShape();
        }

        protected abstract IShape CreateShape();

        //protected abstract IShape CreateShape(Point coord1, Point coord2 = null);
    }
}
