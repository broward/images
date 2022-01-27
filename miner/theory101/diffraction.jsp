<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Meme Theory 101</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		    <a href="<%= cPath %>/theory101/index.jsp">Foundation</a>&nbsp;&nbsp;&nbsp;&nbsp;		
			<a href="<%= cPath %>/theory101/impedance.jsp">Impedance</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/sentiment.jsp">Sentiment</a>&nbsp;&nbsp;&nbsp;&nbsp;
		 <B><a href="<%= cPath %>/theory101/diffraction.jsp">Diffraction</a></B>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<br/>

	<div id="none">
		As a new meme enters the social network, it absorbs bandwidth from existing memes.</br>
		If it spawns new memes, the network allocates <font color="red"><b>more</b></font> bandwidth to them and there is a measurable <b>diffraction</b>.</br>
		<b>Diffraction</b> is directly proportional to cultural acceptance.</br>
		Alternatively, if the meme encounters social rejection, it sinks like a stone into an icy, black pool of water, barely raising a ripple.</br>
		<br/>
		We can measure diffraction by comparing two time-series:
		</br>
		</br>
			<li>The first series shows the magnitude of the new meme, i.e. "Pope + Death"</li>
			<li>The second series shows the existing meme "Pope", minus the elements of the first series
		</br>
		</br>
		The second series shows us diffraction ( new "non-Death" Pope-related memes ) such as:
		</br>
		</br>
			<li>The new pope should be Cardinal Jones</li>
			<li>Do you remember the pope's last speech?</li>
			<li>This pope was an effective leader</li>
		</br>
		</br>
		</br>
		Diffraction can be a measure of potential disruption.
	</div>

	<br/>

	<table width="100%">
	<tr><td>
		<p>Pope's death caused diffraction...</p>
		<img id="memegraph" src="<%= cPath %>/theory101/popelogDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td>
		
	<td>
		<p>but SARS virus sinks without causing a ripple.</p>
		<img id="memegraph" src="<%= cPath %>/theory101/sarsDejanews.png" width="320" height="240" onclick="showWindow(this.src);" />
	</td></tr>
	</table>
</div>
	
</BODY>
</HTML>
