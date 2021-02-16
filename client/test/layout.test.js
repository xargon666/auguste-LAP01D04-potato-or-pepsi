const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');


describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    describe('head', () => {
        test('it has a title', () => {
            const title = document.querySelector('head title');
            expect(title).toBeTruthy();
            expect(title.textContent).toBe("Hello, Server!")
        })
    })

    describe('body', () => {
        describe('button', () => {
            let button;

            beforeEach(() => {
                button = document.querySelector('button')
            })

            test('it exists', () => {
                expect(button).toBeTruthy();
            })

            test('it has a call to action', () => {
                expect(button.textContent.toLowerCase()).toContain('click')
            })

        })

        describe('form', () => {
            let form;
            let nameInput, ageInput, submitBtn;
            beforeEach(() => {
                form = document.querySelector('form')
                nameInput = form.querySelector('#name');
                ageInput = form.querySelector('#age')
                submitBtn = form.querySelector('[type="submit"]');
            })
    
            test('it exists', () => {
                expect(form).toBeTruthy();
            });
    
            describe('name input', () => {
                test('it has an id of "name"', () => {
                    expect(nameInput).toBeTruthy();
                })

                test('it is a text input"', () => {
                    expect(nameInput.getAttribute('type')).toBe('text')
                })
        
                test('it has a label"', () => {
                    expect(document.querySelector('[for="name"]')).toBeTruthy();
                })
            })

            describe('age input', () => {
                test('it has an id of "age"', () => {
                    expect(ageInput).toBeTruthy();
                })

                test('it is a number input"', () => {
                    expect(ageInput.getAttribute('type')).toBe('number')
                })
        
                test('it has a label"', () => {
                    expect(document.querySelector('[for="age"]')).toBeTruthy();
                })
            })
    
            describe('submit button', () => {
                test('it says "Add cat!', () => {
                    expect(submitBtn.value).toBe('Add cat');
                })
            })

        })

        test('it has a section to display cats', () => {
            expect(document.querySelector('section#cats')).toBeTruthy();
        })
    })


})