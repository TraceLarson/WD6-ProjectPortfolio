<?php

namespace App\Controller;

use Doctrine\ORM\Query;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Grades;
//use App\Form\GradesType;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
    	$grades = $this->getDoctrine()->getRepository(Grades::class)->findAll();
	    print_r($grades);
    	
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
	        'grades' => $grades
        ]);
    }
	
	/**
	 * @Route ("/add", name="add", methods="POST")
	 */
	public function add(Request $request) {
		$parametersAsArray =  $request->request->all();
		$percent = filter_input(INPUT_POST, "grade", FILTER_VALIDATE_INT );
		if(!$percent){
			$error = 'Please Enter a percentage';
			return $this->render('default/index.html.twig', [
				'controller_name' => 'DefaultController',
				'error' => $error
			]);
		}
		if($percent > 89){
			$letter = 'A';
		}else if($percent > 79){
			$letter = 'B';
		}else if($percent > 69){
			$letter = 'C';
		}else if($percent > 59) {
			$letter = 'D';
		}else {
			$letter = 'F';
		}
		$grade = new Grades();


		$em = $this->getDoctrine()->getManager();
		$grade->setStudentname($parametersAsArray['name']);
		$grade->setStudentpercent($percent);
		$grade->setStudentlettergrade($letter);
		$em->persist($grade);
		$em->flush();
		
		
		return $this->redirectToRoute('index');

	}
    
}
