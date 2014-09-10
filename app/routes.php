<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/', array('uses'=>'HomeController@index'));

Route::get('/all', array('uses'=>'IdeaController@index'));

Route::get('/show', array('uses'=>'IdeaController@show'));

Route::post('/create', array('uses'=>'IdeaController@create'));

Route::post('/update', array('uses'=>'IdeaController@update'));

Route::post('/destroy', array('uses'=>'IdeaController@destroy'));

