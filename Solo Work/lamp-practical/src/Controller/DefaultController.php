<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

use App\Entity\Grades;
use App\Form\GradesType;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="index")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
	
	/**
	 * @Route ("/add", name="add"
	 */
	public function add(Request $request) {
		$grade = new Grades();
		$form = $this->createForm(GradesType::class, $grade);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() and $form->isValid()) {
			return $this->redirectToRoute('index');
		}
		
		return $this->render('default/index.html.twig', [
			'form' => $form->createView(),
		]);
		
	}
    
}
