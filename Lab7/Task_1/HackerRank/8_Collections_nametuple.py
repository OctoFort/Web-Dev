# Enter your code here. Read input from STDIN. Print output to STDOUT

from collections import namedtuple

a = int(input())
table = input().split()

Student = namedtuple('Student', f'{table[0]}, {table[1]}, {table[2]}, {table[3]}')
Students = []

for _ in range(a):
    someInput = input().split()

    Students.append(Student(someInput[0],someInput[1],someInput[2],someInput[3]))

sum = 0
for i in range(a):
    sum += int(Students[i].MARKS)

print(sum/a)