<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\GradesRepository")
 */
class Grades
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $studentid;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $studentname;

    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $studentpercent;

    /**
     * @ORM\Column(type="string", length=5, nullable=true)
     */
    private $studentlettergrade;

    public function getId(): ?int
    {
        return $this->studentid;
    }

    public function getStudentname(): ?string
    {
        return $this->studentname;
    }

    public function setStudentname(?string $studentname): self
    {
        $this->studentname = $studentname;

        return $this;
    }

    public function getStudentpercent(): ?string
    {
        return $this->studentpercent;
    }

    public function setStudentpercent(?string $studentpercent): self
    {
        $this->studentpercent = $studentpercent;

        return $this;
    }

    public function getStudentlettergrade(): ?string
    {
        return $this->studentlettergrade;
    }

    public function setStudentlettergrade(?string $studentlettergrade): self
    {
        $this->studentlettergrade = $studentlettergrade;

        return $this;
    }
}
