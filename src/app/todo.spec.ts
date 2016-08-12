/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Todo} from './todo';

describe('Todo', () => {

  it('should create an instance', () => {
    expect(new Todo('teste',true)).toBeTruthy();
  });

  it('Should accept values in the constructor',() =>{

    let todo = new Todo('hello',true);
    expect(todo.title).toEqual('hello');
    expect(todo.complete).toEqual(true);
  });
});
