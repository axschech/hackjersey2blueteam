<?php 

namespace App\Http\Controllers;

// use Data\Accident;

class HomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Home Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders your application's "dashboard" for users that
	| are authenticated. Of course, you are free to change or remove the
	| controller as you wish. It is just here to get your app started!
	|
	*/

	public $headers = ['Access-Control-Allow-Origin', '*'];

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		// $this->middleware('auth');
	}

	/**
	 * Show the application dashboard to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('home');
	}

	public function overview() 
	{
		$offset = \Request::get('offset');
		$limit = \Request::get('limit');
		if(empty($limit)) {
			$limit = 20;
		} else if($limit > 100) {
			$limit = 100;
		}
		$query = \Data\Accident\Accident::select(
										'CaseNumber',
										'CrashTime',
										'CrashDate',
										'Latitude',
										'Longitude',
										'CountyName',
										'MunicipalityName'
										)->limit($limit);
		if(!empty($offset)) {
			$query->offset($offset);
		}
		$data = $query->get();
		return response($data,200)->header($this->headers[0],$this->headers[1]);;
	}

	public function details($case_number)
	{
		$data = \Data\Accident\Accident::where('CaseNumber', $case_number)->first();
		if($data) {
			return response($data, 200)->header($this->headers[0],$this->headers[1]);
		} else {
			return response('', 404);
		}
	}
}
