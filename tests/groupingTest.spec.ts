// for grouping we have to use describe 

import {test,expect} from '@playwright/test';

test.describe("Group Test1",()=>{
    test("Test case1",async()=>{
        console.log('test1')
    });
    test("Test case2",async()=>{
        console.log('test2')
    });
    test("Test case3",async()=>{
        console.log('test3')
    });
});

test.describe("Group Test2",()=>{
    test("Test case4",async()=>{
        console.log('test4')
    });
    test("Test case5",async()=>{
        console.log('test5')
    });
    test("Test case6",async()=>{
        console.log('test6')
    });
});