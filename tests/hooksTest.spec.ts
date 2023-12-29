import {test,expect} from '@playwright/test';

test.beforeAll(()=>{
    console.log('beforeAll')
});
test.beforeEach(()=>{
    console.log('beforeEach');
});

test.afterAll(()=>{
    console.log('afterAll')
});
test.afterEach(()=>{
    console.log('afterEach');
});

test("Test case1",async()=>{
    console.log('test1')
});
test("Test case2",async()=>{
    console.log('test2')
});
test("Test case3",async()=>{
    console.log('test3')
});