import {test,expect} from '@playwright/test';

test("test1@Sanity",async()=>{
    console.log('this is test1')
});

test("test2@Sanity",async()=>{
    console.log('this is test2')
});
test("test3@reg",async()=>{
    console.log('this is test3')
});
test("test4@reg",async()=>{
    console.log('this is test4')
});

test("test5@sanity@reg",async()=>{
    console.log('this is test5')
});