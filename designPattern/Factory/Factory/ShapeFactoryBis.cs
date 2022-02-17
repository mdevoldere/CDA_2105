using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Factory
{
    internal class ShapeFactoryBis
    {
        public IShape GetShape(string shapeType)
        {
            IShape shape = null;

            switch (shapeType.ToLower())
            { case "rectangle":
                    shape = new Rectangle();
                    break;
                case "circle":
                    shape = new Circle();
                    break;
                default:
                    throw new ArgumentException("Unknown Shape");

            }
            return shape;
        }
    }
}
