<?php

class IdeasTableSeeder extends Seeder {

	public function run()
	{
    DB::table('ideas')->delete();
    Idea::create(array(
      'comment'=> 'I\'m gonna get you sucka',
      'author' => 'Rai',
      'votes' => 0,
      'IsCrossedOut'=>false
    ));
	}
}
