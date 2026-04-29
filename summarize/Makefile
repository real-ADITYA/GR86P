# Variables
CC = gcc
CFLAGS = -O3 -fopenmp
LIBS = -lm
TARGET = summarize
SRC = summarize.c

# Default target: compiles the program
all: $(TARGET)

$(TARGET): $(SRC)
	$(CC) $(CFLAGS) $(SRC) $(LIBS) -o $(TARGET)

# Clean target: removes the executable
clean:
	rm -f $(TARGET)
