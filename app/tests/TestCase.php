<?php

class TestCase extends Illuminate\Foundation\Testing\TestCase {

	/**
	 * Creates the application.
	 *
	 * @return \Symfony\Component\HttpKernel\HttpKernelInterface
	 */
	public function createApplication()
	{
		$unitTesting = true;

		$testEnvironment = 'testing';

		return require __DIR__.'/../../bootstrap/start.php';
  }

  public function testTrueIsTrue(){

		$this->assertTrue(true);
  }

   public function showRoute()
	{
		$crawler = $this->client->request('GET', '/show/12');

		$this->assertTrue($this->client->getResponse()->isOk());
	}

	public function allRoute()
	{
		$crawler = $this->client->request('GET', '/all');

		$this->assertTrue($this->client->getResponse()->isFalse());
	}
}
