
import sys

def check_braces(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    script_start = content.find('<script>')
    script_end = content.find('</script>')
    
    if script_start == -1 or script_end == -1:
        print("No script tag found")
        return

    script_content = content[script_start:script_end]
    
    stack = []
    lines = script_content.split('\n')
    for i, line in enumerate(lines):
        for j, char in enumerate(line):
            if char == '{':
                stack.append(('{', i + 1, j + 1))
            elif char == '}':
                if not stack:
                    print(f"Extra closing brace at line {i + 1}, col {j + 1}")
                else:
                    stack.pop()
    
    if stack:
        for char, line, col in stack:
            print(f"Unclosed {char} at line {line}, col {col}")
    else:
        print("No brace issues found in script tag")

if __name__ == "__main__":
    check_braces(sys.argv[1])
