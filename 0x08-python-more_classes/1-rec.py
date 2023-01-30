#!/usr/bin/python3
"""A class that defines a rectangle"""


class Rectangle:
    """Represents a Rectangle """
    def __init__(self, width=0, height=0):
        """Initializing the Rectangle class
	    Args:
	        width: width ofthe rectangle
	        height: height of the rectangle
	    Raises:
	        TypeError: if width of the rectangle
	        ValueError: if widthis < 0
	 """
        self.width = width
        self.height = height

    @property
    def width(self):
        """Retrieves the width of the rectangle"""

        return self.__width

    @width.setter
    def width(self, value):
        """sets the width"""
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        if value < 0:
	    raise ValueError("width must be >= 0")
        self.__width = value

    @property
    def height(self):
        """Retrieves the height of the rectangle"""

        return self.__height

    @height.setter
    def height(self, value):
        """sets the height"""
	if not isinstance(value, int):
            raise TypeError("height must be >= 0")

