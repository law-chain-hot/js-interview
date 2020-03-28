const decoratorClass = (targetClass) => {
    targetClass.test = '123'
}
@decoratorClass
class Test1 {}
Test1.test; // '123'
