import { TestComponent } from './test-component'

describe('TestComponent', () => {
    it('should render some basic test',  () => {
        const value = TestComponent();
        expect(value).toBe("This is a test component");
    });
})