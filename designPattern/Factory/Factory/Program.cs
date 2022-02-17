// See https://aka.ms/new-console-template for more information
using Factory;

ShapeFactory factory;

RectangleFactory rectangleFactory = new();
CircleFactory circleFactory = new();
IShape shape = null;


Console.WriteLine("User click on circle tool.");
factory = circleFactory;
shape = factory.GetShape();
shape.Draw();

Console.WriteLine("User click on rectangle tool.");
factory = rectangleFactory;
shape = factory.GetShape();
shape.Draw();

Console.WriteLine("\n\nUser click on circle tool.");
ShapeFactoryBis factoryBis = new();
shape = factoryBis.GetShape("circle");
shape.Draw();