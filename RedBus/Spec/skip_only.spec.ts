import {test} from '@playwright/test';

// it will skip this test and execute remaining
test.skip("Test 1",async()=>{
    console.log('test 1');
});

test("Test 2",async()=>{
    console.log('test 2');
});

//only this test case will run
test.only("Test 3",async()=>{
    console.log('test 3');
});
test("Test 4",async()=>{
    console.log('test 4');
});