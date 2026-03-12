variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  default = "klin-key"
}

variable "ami_id" {
  default = "ami-0c7217cdde317cfec"  # Ubuntu 24.04 LTS us-east-1
}