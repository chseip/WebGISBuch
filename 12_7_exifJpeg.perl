#>less exifdump.pl
#!/usr/bin/perl
use Image::EXIF;
use Data::Dumper;
foreach my $file (@ARGV) {
 my $exif = new Image::EXIF($file);
 print "file: $file ".Dumper($exif->get_all_info($file));
}
#>exifdump.pl DSC_3023.JPG