// let code = 'console.log("Hello world");';
const versions = [
    ["javascript", "18.15.0", ".js"],
    ["python", "3.10.0", ".py"],
    ["java", "15.0.2", ".class"],
    ["typescript", "1.32.2", ".ts"]
];

export async function run(lang, code) {
    let ver = (versions.find(version => version[0] === lang))[1];
    let typ = (versions.find(version => version[0] === lang))[2];
    const payload = {
        "language": lang,
        "version": ver,
        "files": [
            {
                "name": "code" + typ,
                "content": code
            }
        ],
        "stdin": "",
        "args": ["1", "2", "3"],
        "compile_timeout": 10000,
        "run_timeout": 3000,
        "compile_memory_limit": -1,
        "run_memory_limit": -1
    };

    const res = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    const data = await res.json();
    const output = data.run.stdout || data.run.stderr || 'No output available';
    return output;
}



const defaults = [
    ["java", `public class Test {

    // Fields (variables)
    private int myField;
    private String myString;

    // Constructor
    public Test(int myField, String myString) {
        this.myField = myField;
        this.myString = myString;
    }

    // Methods
    public int getMyField() {
        return myField;
    }

    public void setMyField(int myField) {
        this.myField = myField;
    }

    public String getMyString() {
        return myString;
    }

    public void setMyString(String myString) {
        this.myString = myString;
    }

    public void doSomething() {
        System.out.println("Doing something...");
    }

    // Main method (entry point for execution)
    public static void main(String[] args) {
        Test myObject = new Test(42, "Hello, World!");
        System.out.println("MyField: " + myObject.getMyField());
        System.out.println("MyString: " + myObject.getMyString());
        myObject.doSomething();
    }
}
`],
    ["python", `def hello_world():
    print("Hello, World!")

def main():
    # Call the hello_world function
    hello_world()

    # Example of if-else statement
    number = 10
    if number > 5:
        print("Number is greater than 5")
    else:
        print("Number is less than or equal to 5")

    # Example of a for loop
    print("Printing numbers from 1 to 5:")
    for i in range(1, 6):
        print(i)

    # Example of a while loop
    print("Printing numbers from 1 to 5 using a while loop:")
    count = 1
    while count <= 5:
        print(count)
        count += 1

if __name__ === "__main__":
    main()
`],
    ['javascript',`class MyClass {
    constructor() {
        // Constructor
    }

    // Method to print "Hello, World!"
    helloWorld() {
        console.log("Hello, World!");
    }

    // Method to demonstrate an if-else statement
    checkNumber(number) {
        if (number > 5) {
            console.log("Number is greater than 5");
        } else {
            console.log("Number is less than or equal to 5");
        }
    }

    // Method to demonstrate a for loop
    printNumbers() {
        console.log("Printing numbers from 1 to 5:");
        for (let i = 1; i <= 5; i++) {
            console.log(i);
        }
    }

    // Method to demonstrate a while loop
    printNumbersWhile() {
        console.log("Printing numbers from 1 to 5 using a while loop:");
        let count = 1;
        while (count <= 5) {
            console.log(count);
            count++;
        }
    }
}

// Create an instance of MyClass
const myObject = new MyClass();

// Call methods of the class
myObject.helloWorld();
myObject.checkNumber(10);
myObject.printNumbers();
myObject.printNumbersWhile();
`]
    , [
        "text",`In the heart of a bustling city, amidst the hustle and bustle of daily life, there stood a quaint bookstore known as "Whispering Pages." Tucked away on a quiet street corner, its weathered facade beckoned to those seeking solace in the embrace of literature. Within its cozy confines, shelves lined with books of every genre stretched toward the heavens, and the scent of aged paper mingled with the soft murmur of turning pages.

At the helm of Whispering Pages was a wise old librarian named Mr. Finch, whose twinkling eyes held the secrets of countless stories yet untold. With a gentle smile, he welcomed weary souls seeking refuge from the chaos of the outside world, guiding them on journeys of imagination and discovery. And so, within the walls of Whispering Pages, amidst the timeless tales and whispered dreams, the magic of literature bound together kindred spirits in a shared love for the written word.`
    ]
]



export function settemplate(lang) {
    return defaults.find(d => d[0] === lang)[1]
}