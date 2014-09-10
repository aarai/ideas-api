<?php

class IdeaController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
  {
    $ideas = Idea::all();
    return Response::json($ideas);
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
    $idea = new Idea;
    $idea->comment = Input::get('comment');
    $idea->author = Input::get('author');
    $idea->votes = Input::get('votes');
    $idea->isCrossedOut = Input::get('isCrossedOut');
    $idea->save();
    $input = Input::all();
    return Response::json('success');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
  {
    $id = Input::get('id');
    $idea = Idea::find($id);
    return Response::json($idea);
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update()
	{
    $id = Input::get('id');
    $idea = Idea::find($id);
    $idea->comment = Input::get('comment');
    $idea->author = Input::get('author');
    $idea->votes = Input::get('votes');
    $idea->isCrossedOut = Input::get('isCrossedOut');
    $idea->save();
    return Response::json('success');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy()
  {
    $id = Input::get('id');
    $idea = Idea::find($id);
    $idea->delete();
    return Response::json('success');
	}

}
